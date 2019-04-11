cd build/

sudo chmod +x com.stream.server.plist
sudo chmod +x stream-ctl-server

sudo cp ~/Documents/'01 Workplace William'/stream_server/build/com.stream.server.plist /Library/LaunchAgents/

cd /Library/LaunchAgents/

sudo launchctl unload com.stream.server.plist || echo "Service wasn't loaded before"
sudo launchctl load com.stream.server.plist || echo "Service refused to register"

