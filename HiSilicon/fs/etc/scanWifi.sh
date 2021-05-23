/bin/camcli w | grep "#" | sort -t# -k1,1d -k2,2nr |awk -F '#' '!a[$1]++' > /mnt/mtd/wifilist.txt



