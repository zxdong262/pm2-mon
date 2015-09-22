# pm2-mon
monit pm2 process by "pgrep node", if only node process, run specified restart command/script.

(I make this thing only because pm2 sometimes crashes, I do not know why it crash, and I have to restart it anyway)

## install
```bash
npm install pm2-mon -g
```

## help
```bash
pm2-mon --help

  Usage: pm2-mon [options]

  monit pm2 process by "pgrep node", if only node process, run specified restart command/script

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -t, --timer    check pm2 every {timer} milli second, optional, default is 5000
    -c, --cmd      the restart shell-script path, required, will be runned by sh
    -n, --num      when node process less than {num}, the restart shell-script will run, optional, default is 2

```

## run
```bash
pm2-mon -t 5000 -c example/restart.sh -n 3
```
## suggestion
use <a href='https://github.com/tj/mon'>tj/mon</a> to run this pm2-mon script.

## change log
0.0.3 add num param

## License
MIT