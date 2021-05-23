#!/bin/sh
sleep 10

# Performed at boot
 
BA="B"
ID=`cat /etc/init.d/setUnabtoID.sh | awk '/UNABTO_ID/ {print substr($1,12,29)}'`
FW=`cat /mnt/mtd/equinfo_conf | awk '/softwareFVersion / {print $2}'`
WW=`cat /mnt/mtd/equinfo_conf | awk '/softwareCVersion / {print $2}'`
WF=`ifconfig wlan0 | grep -q inet ; [[ $? -eq 0 ]] && { echo WIFI; } || { echo noWIFI; }`
SD=`mountpoint -q /mnt/sd; [[ $? -eq 0 ]] && { echo SD; } || { echo noSD; }`
RH=`sha256sum /bin/rtspd | awk '{print $1}'`
VS=`unabtoCamera -V`
V1=${VS:0:7}
V2=${VS:9:6}
MD=${VS:17}
TZ=None

if [[ -e /mnt/mtd/timezone.txt ]]; then
	TZ=`cat /mnt/mtd/timezone.txt`
fi
 
# performed every hour
 
while :
do
	PR=0
 
	pgrep avcapture > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+1))
	fi

	pgrep avsave > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+2))
	fi

	pgrep rtspd > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+4))
	fi

	pgrep unabtoCamera > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+8))
	fi

	pgrep snapshotserver > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+16))
	fi

	pgrep ntpd > /dev/null
	if [ $? -eq 0 ]
	then
		PR=$((PR+32))
	fi

	IP=`ifconfig |grep 'inet addr' | grep -v 127.0.0.1 | cut -d':' -f2 | cut -d' ' -f1`
	POSTDATA="ID=$ID&IP=$IP&V1=$V1&V2=$V2&MD=$MD&BA=$BA&FW=$FW&WW=$WW&RH=$RH-$WF-$SD-$TZ-$PR"

	if [[ "$#" -eq 1 ]]; then
	    date
	    echo 'ID           : '$ID
	    echo 'IP           : '$IP
	    echo 'Version1     : '$V1
	    echo 'Version2     : '$V2
	    echo 'Firmware     : '$FW
	    echo 'Webware      : '$WW
	    echo 'Rtspd        : '$RH
	    echo 'Wifi         : '$WF
	    echo 'SD card      : '$SD
	    echo 'Timezone     : '$TZ
	    echo 'Model        : '$MD
	    echo 'Mode         : '$BA
	    echo 'Process sum  : '$PR 
	else
	    wget -q -O /dev/null --post-data=$POSTDATA  http://cameras.smartwares.eu/logcamera/
	fi

	rm -rf /mnt/mtd/pic_24h
	 
	sleep 1h
	`ps |grep unabtoCamera |grep -vq grep`

	if [ $? -eq 1 ]; then
		BA="D"
	else
		BA="A"
	fi
done

