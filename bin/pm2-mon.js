#!/usr/bin/env node

var mon = require('../lib')
var resolve = require('path').resolve
var program = require('commander')

program
  .version(require('../package.json').version)
  .description('monit pm2 process by "pgrep node", if only node process, run specified restart command/script')
  .option('-t, --timer', 'check pm2 every {timer} milli second, optional, default is 5000')
  .option('-c, --cmd', 'the restart shell-script path, required, will be runned by sh')
  .option('-n, --num', 'when node process less than {num}, the restart shell-script will run, optional, default is 2')
  .parse(process.argv)

if (!program.args.length) return program.help()

var cmd = ''

var timer = 5000

var num = 2

var arr = program.rawArgs

for(var i = 2, len = arr.length;i < len;i ++) {
	var name = arr[i]
	if(name === '-c') cmd = arr[i+1]
	else if(name === '-t') timer = arr[i+1]
  else if(name === '-n') num = arr[i+1]
}

if(!cmd) return program.help()

mon({
  cmd: cmd
  ,timer: timer
  ,num: num
})