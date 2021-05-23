echo "[watchErrorMode.sh] started at : `date`" >> /network.txt

sleep 120s

echo "[watchErrorMode.sh] rebooting at : `date`, re-trying to connect ..." >> /network.txt

reboot -f
