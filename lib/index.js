
// global
var fs = require('fs')
,path = require('path')
,exe = require('child_process').exec
,Promise = global.Promise || require('promise')

,exec = function(cmd, options) {

	return new Promise(function(resolve, reject) {
		exe(cmd, options || {}, function(error, stdout, stderr) {
			if(error) reject(error)
			else if(stderr) reject(stderr)
			else resolve(stdout)
		})
	})

	//end
}

module.exports = function(_options) {

	var options = _options || {}
	,cmd = options.cmd
	,num = parseInt(options.num, 10) || 2
	,timer = parseInt(options.timer, 10) || 5000

	console.log('cmd:', cmd)
	console.log('timer:', timer)
	console.log('num:', num)

	loop()

	function loop() {

		exec('pgrep node')
		.then(function(res) {
			if(res.split('\n').length < num) {
				restart()
			}
			else return setTimeout(loop, timer)
		}, function(err) {
			console.log('exec pgrep node error\n')
			console.err(err.stack || err)
		})

	}

	function restart() {

		exec(cmd)
		.then(function(res) {
			console.log(res)
			console.log('done')
			setTimeout(loop, timer)
		}, function(err) {
			console.log('restart cmd exec error\n')
			console.log(err.stack || err)
		})

	}

	//end
}
