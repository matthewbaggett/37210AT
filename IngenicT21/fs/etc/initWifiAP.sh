SSID="$1"
PW="$4"

echo "ctrl_interface=/var/run/wpa_supplicant
network={
ssid=\"$SSID\"
key_mgmt=WPA-PSK
proto=RSN WPA WPA2
pairwise=TKIP CCMP
group=TKIP CCMP
psk=\"$PW\"
} " > /mnt/mtd/wpa.conf


