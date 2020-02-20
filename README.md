# Zerotier Central CLI

Command Line Interface to my.zerotier.com

Still experimenting with the commands/outputs.

## install
npm i -g @laduke/zerotier-central-cli

# Usage
  <!-- usage -->
```sh-session
$ npm install -g @laduke/zerotier-central-cli
$ ztc COMMAND
running command...
$ ztc (-v|--version|version)
@laduke/zerotier-central-cli/0.0.3 darwin-x64 node-v10.16.0
$ ztc --help [COMMAND]
USAGE
  $ ztc COMMAND
...
```
<!-- usagestop -->
  # Commands
  <!-- commands -->
* [`ztc autocomplete [SHELL]`](#ztc-autocomplete-shell)
* [`ztc help [COMMAND]`](#ztc-help-command)
* [`ztc member:get NETWORKID NODEID`](#ztc-memberget-networkid-nodeid)
* [`ztc member:list NETWORKID`](#ztc-memberlist-networkid)
* [`ztc member:set NETWORKID NODEID`](#ztc-memberset-networkid-nodeid)
* [`ztc network:get NETWORKID`](#ztc-networkget-networkid)
* [`ztc network:list`](#ztc-networklist)
* [`ztc network:set NETWORKID`](#ztc-networkset-networkid)
* [`ztc setup`](#ztc-setup)
* [`ztc status`](#ztc-status)

## `ztc autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ztc autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ztc autocomplete
  $ ztc autocomplete bash
  $ ztc autocomplete zsh
  $ ztc autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `ztc help [COMMAND]`

display help for ztc

```
USAGE
  $ ztc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `ztc member:get NETWORKID NODEID`

get one member

```
USAGE
  $ ztc member:get NETWORKID NODEID

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort
```

_See code: [src/commands/member/get.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/member/get.js)_

## `ztc member:list NETWORKID`

list members of network

```
USAGE
  $ ztc member:list NETWORKID

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort
```

_See code: [src/commands/member/list.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/member/list.js)_

## `ztc member:set NETWORKID NODEID`

change config

```
USAGE
  $ ztc member:set NETWORKID NODEID

OPTIONS
  -c, --columns=columns
  -e, --extended             extended output
  -j, --json                 output raw json
  -t, --token=token          my.zerotier.com api access token
  --[no-]activeBridge
  --[no-]authorized
  --csv                      output is csv format
  --description=description
  --filter=filter            filter property by partial string matching, ex: name=foo
  --[no-]hidden
  --name=name
  --no-header                hide table header from output
  --no-truncate              do not truncate output to fit screen
  --[no-]noAutoAssignIps
  --sort=sort
```

_See code: [src/commands/member/set.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/member/set.js)_

## `ztc network:get NETWORKID`

get one network

```
USAGE
  $ ztc network:get NETWORKID

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort
```

_See code: [src/commands/network/get.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/network/get.js)_

## `ztc network:list`

list your networks

```
USAGE
  $ ztc network:list

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort
```

_See code: [src/commands/network/list.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/network/list.js)_

## `ztc network:set NETWORKID`

change config

```
USAGE
  $ ztc network:set NETWORKID

OPTIONS
  -c, --columns=columns
  -e, --extended                         extended output
  -j, --json                             output raw json
  -t, --token=token                      my.zerotier.com api access token
  --[no-]6plane
  --csv                                  output is csv format
  --description=description
  --[no-]enableBroadcast
  --filter=filter                        filter property by partial string matching, ex: name=foo
  --ipAssignmentPools=ipAssignmentPools  <rangeStart>-<rangeEnd> overwrites existing
  --mtu=mtu
  --multicastLimit=multicastLimit
  --name=name
  --no-header                            hide table header from output
  --no-truncate                          do not truncate output to fit screen
  --[no-]private
  --[no-]rfc4193
  --routes=routes                        <target>[-via] overwrites existing. Can specify multiple
  --sort=sort
  --[no-]v4AutoAssign
  --[no-]v6AutoAssign
```

_See code: [src/commands/network/set.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/network/set.js)_

## `ztc setup`

save your api token to disk.

```
USAGE
  $ ztc setup

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort
```

_See code: [src/commands/setup.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/setup.js)_

## `ztc status`

my.zerotier.com status

```
USAGE
  $ ztc status

OPTIONS
  -c, --columns=columns
  -e, --extended         extended output
  -j, --json             output raw json
  -n, --name=name        name to print
  -t, --token=token      my.zerotier.com api access token
  --csv                  output is csv format
  --filter=filter        filter property by partial string matching, ex: name=foo
  --no-header            hide table header from output
  --no-truncate          do not truncate output to fit screen
  --sort=sort

DESCRIPTION
  not much here
```

_See code: [src/commands/status.js](https://github.com/laduke/zerotier-central-cli/blob/v0.0.3/src/commands/status.js)_
<!-- commandsstop -->

## examples
`ztc setup` (so you don't have to put your api token every time)

`ztc network:list`

`ztc member:list 6ab565387a82c205 --filter=online=true --sort=creation-time --columns="node-id,name,ip-assignments"`
