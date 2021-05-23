id=$(cat /mnt/sd/HWwifi.txt | sed -n 1p | cut -d'"' -f2)
pw=$(cat /mnt/sd/HWwifi.txt | sed -n 2p | cut -d'"' -f2)

echo "[setWifiSD.sh] ssid found : $id"
echo "[setWifiSD.sh] pass found : $pw"
if [ -z "$id" ] || [ -z "$pw" ]
then
	exit 1
fi

QUOTE="\""

echo "ctrl_interface=/var/run/wpa_supplicant
network={
ssid="$QUOTE$id$QUOTE"
key_mgmt=WPA-PSK
proto=RSN WPA WPA2
pairwise=TKIP CCMP
group=TKIP CCMP
psk="$QUOTE$pw$QUOTE"
} " > /mnt/mtd/wpa.conf
