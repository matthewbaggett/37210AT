echo "[watchAPMode.sh] started at : `date`" >> /network.txt

sleep 3600s

echo "[watchAPMode.sh] time out received at : `date`, ending AP mode !" >> /network.txt

ifconfig wlan0 down
killall -9 unabtoCamera
/bin/camcli e
