#!/bin/bash
# Copy across patched files
cp -Rv app/* /app/
cp -Rv etc/* /etc/
cp -Rv root/.profile /root/.profile

rm -f /etc/writeUnabtoID.sh /etc/init.d/setUnabtoID.sh /etc/init.d/runUnabto.sh
# Set the name to match camera_name.txt
/etc/set_name.sh

# Copy wpa-hisilicon.conf & Rehup networking
cp wpa.conf /mnt/mtd/wpa.conf
/etc/init.d/network.sh

# Kill some services
killall unabtoCamera
killall alive.sh
killall snapshot.sh
kill $(ps aux | grep waakhond.sh    | tr -s ' ' | cut -f2 -d' ')
kill $(ps aux | grep watchAPMode.sh | tr -s ' ' | cut -f2 -d' ')
killall

# Set the root password to the contents of passwd.txt
#(cat /mnt/sd/root_password.txt;cat /mnt/sd/root_password.txt) | passwd

# Break rtsp streaming out of the network (which it does by default ew)
rm /mnt/mtd/rtsp_conf
touch /mnt/mtd/rtsp_conf

# Break Pushserver
sed -i 's|PUSH_ENABLE .*|PUSH_ENABLE 0|g' /mnt/mtd/pushserver_conf
sed -i 's|SERVERADDR .*|SERVERADDR 127.0.0.1|g' /mnt/mtd/pushserver_conf

# Break QRMode
sed -i 's|QRMODE .*|QRMODE 0|g' /mnt/mtd/qrmode_conf