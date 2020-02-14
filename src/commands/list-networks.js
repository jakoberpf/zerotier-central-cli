const {flags} = require('@oclif/command')
const Command = require('../base.js')
const cli = require('cli-ux').default

class ListNetworks extends Command {
  async run() {
    const {flags} = this.parse(ListNetworks)

    const networks = await this.central.getNetworks()

    if (flags.json) {
      this.log(JSON.stringify(networks, 0, 4))
    } else {
      this.log(makeTable(networks, flags))
    }
  }
}

function makeTable(networks, flags) {
  return cli.table(
    networks,
    {
      id: {header: 'Network ID', minWidth: 16},
      name: {
        minWidth: 10,
        get: row => row.config.name,
      },
      description: {extended: true},
      private: {
        get: row => row.config.private,
      },
      v4AutoAssign: {
        header: 'Auto-Assign V4',
        get: row => row.config.v4AssignMode.zt,
      },
      v6AutoAssign: {
        header: 'Auto-Assign V6',
        get: row => row.config.v6AssignMode.zt,
      },
      sixPlane: {
        header: '6PLANE',
        get: row => row.config.v6AssignMode['6plane'],
      },
      rfc4193: {
        header: 'RFC4193',
        get: row => row.config.v6AssignMode.rfc4193,
      },
      multicast: {
        get: row => row.config.multicastLimit,
      },
      MTU: {
        get: row => row.config.mtu,
      },
      broadcast: {
        get: row => row.config.enableBroadcast,
      },
    },
    flags
  )
}

ListNetworks.description = 'list your networks'

ListNetworks.flags = {
  ...Command.flags,
  json: flags.boolean({char: 'j', description: 'output raw json'}),
  extended: flags.boolean({description: 'extended output'}),
}

module.exports = ListNetworks
