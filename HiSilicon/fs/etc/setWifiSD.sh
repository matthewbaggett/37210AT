id=$(cat /mnt/sd/HWwifi.txt | sed -n 1p | cut -d'"' -f2)
pw=$(cat /mnt/sd/HWwifi.txt | sed -n 2p | cut -d'"' -f2)

echo "[setWifiSD.sh] ssid found : $id"
echo "[setWifiSD.sh] pass found : $pw"
if [ -z $id ] || [ -z $pw ]
then
	exit 1
fi

QUOTE="\""

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
ssid="$QUOTE$id$QUOTE"
key_mgmt=WPA-PSK
proto=RSN WPA WPA2
pairwise=TKIP CCMP
group=TKIP CCMP
psk="$QUOTE$pw$QUOTE"
} " > /mnt/mtd/wpa.conf
