killall -9 wpa_supplicant
killall -9 hostapd
ifconfig eth0 down
ifconfig wlan0 down
ifconfig wlan0 192.168.7.1 netmask 255.255.255.0 up
killall -9 udhcpc
killall -9 udhcpd

SSID=`grep ID < /etc/init.d/setUnabtoID.sh |cut -d'"' -f2|cut -d'.' -f1`
PW=$SSID"pass"

echo "interface=wlan0
ctrl_interface=/var/run/hostapd
ssid=$SSID
channel=6
wpa=2
wpa_passphrase=$PW
eap_server=1
hw_mode=g
wme_enabled=1
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
max_num_sta=8
wpa_group_rekey=86400" > /tmp/hostapd.conf
hostapd /tmp/hostapd.conf -B
sleep 5
echo "start     192.168.7.10
end      192.168.7.41
interface       wlan0
option           lease   3600" > /tmp/udhcpd.conf
udhcpd /tmp/udhcpd.conf &


