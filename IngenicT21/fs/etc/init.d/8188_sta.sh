echo "[8188_sta.sh] -------> START at `date` <-------"

killall -9 wpa_supplicant
killall -9 hostapd
ifconfig wlan0 down
ifconfig eth0 down
killall -9 udhcpc
killall -9 udhcpd

wpa_supplicant -Dnl80211 -i wlan0 -c/mnt/mtd/wpa.conf -B

i=1
while [ $i -le 10 ]
do

echo "[8188_sta.sh] Try $i"

	status=`wpa_cli status wlan0`
	wpa_state=`echo ${status#*wpa_state=}`
 
	s=$(echo $wpa_state | grep "COMPLETED")

	if [ "$s" != "" ]
	then
		udhcpc -i wlan0 > /dev/null &
		echo -e "\033[32m[8188_sta.sh] connect successfully !\033[0m"
		exit 0
	fi

	sleep 1
	let i++
done
echo -e "\033[31m[8188_sta.sh] connect failed !\033[0m"
exit 1;


