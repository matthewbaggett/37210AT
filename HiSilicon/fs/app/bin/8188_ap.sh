killall -9 wpa_supplicant
killall -9 hostapd
ifconfig eth0 down
ifconfig wlan0 192.168.1.1 netmask 255.255.255.0 up
killall -9 udhcpc
killall -9 udhcpd
echo "interface=wlan0
ctrl_interface=/var/run/hostapd
ssid=AP_TEST
channel=6
wpa=0
eap_server=1
wps_state=2
uuid=12345678-9abc-def0-1234-56789abcdef0
device_name=RTL8188FU
manufacturer=Realtek
model_name=RTW_SOFTAP
model_number=WLAN_CU
serial_number=12345
device_type=6-0050F204-1
os_version=01020300
config_methods=label display push_button keypad
driver=rtl871xdrv
beacon_int=100
hw_mode=g
ieee80211n=1
wme_enabled=1
ht_capab=[SHORT-GI-20][SHORT-GI-40][HT40+]
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
max_num_sta=8
wpa_group_rekey=86400" > /tmp/hostapd.conf
hostapd /tmp/hostapd.conf -B
sleep 5
echo "start	192.168.1.10
end	 192.168.1.20
interface	wlan0
opt dns 8.8.8.8 4.4.4.4
option 		 subnet  255.255.255.0
opt			 router  192.168.1.1
option 		 dns	 8.8.8.8
option 		 domain  local
option 		 lease	 3600" > /tmp/udhcpd.conf
udhcpd /tmp/udhcpd.conf &


