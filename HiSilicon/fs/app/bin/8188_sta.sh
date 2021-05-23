#!/bin/sh

killall -9 wpa_supplicant
killall -9 hostapd
ifconfig eth0 down
killall -9 udhcpc
killall -9 udhcpd
echo "ctrl_interface=/var/run/wpa_supplicant
update_config=1
device_name=RTL8188FU
manufacturer=Realtek
model_name=RTW_STA
model_number=WLAN_CU
serial_number=12345
device_type=1-0050F204-1
os_version=01020300
config_methods=virtual_display virtual_push_button keypad
network={
ssid=\"apexis5\"
psk=\"0123456789\"
key_mgmt=WPA-PSK
proto=RSN WPA WPA2
pairwise=TKIP CCMP
group=TKIP CCMP
}" > /tmp/wpa.conf
#cat /tmp/wpa-hisilicon.conf
wpa_supplicant -Dwext -i wlan0 -c/tmp/wpa.conf -B


#for ѭ��������ʹ��
#for i in `seq 1 10`
#for i in {1..10}
#for ((;;))
i=1
while [ $i -le 10 ]
do

echo "Try $i"

	status=`wpa_cli status wlan0`
	wpa_state=`echo ${status#*wpa_state=}`
	#echo $wpa_state 
	s=$(echo $wpa_state | grep "COMPLETED")
	#echo $s
	if [ "$s" != "" ]; then
	
		udhcpc -i wlan0 > /dev/null &
echo -e "\033[32m================>connect successed<================\033[0m"

		exit
	fi
	sleep 1
	let i++
done
echo -e "\033[31m================>connect failed<================\033[0m"


