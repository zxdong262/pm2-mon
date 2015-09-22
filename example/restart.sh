#!/bin/bash
pm2 start ~/cmds/start-redis.sh
pm2 start ~/cmds/start-mongod.sh

cd ~/dev0/cdn
#pm2 start dev-server.json
pm2 start watch.sh
cd ../h5
pm2 start dev-server.json
cd ~/dev4/weather-cdn
pm2 start watch-tqb-cdn.sh
pm2 list


