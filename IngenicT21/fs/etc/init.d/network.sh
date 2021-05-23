echo "[network.sh] -------> START at `date` <-------"

# Check for WiFi configfile on SD card, if found copy to /mnt/mtd/wpa-hisilicon.conf and continue
if [ -e /mnt/sd/HWwifi.txt ]
then
 	echo "[network.sh] HWwifi.txt found, writing configuration ..."
	/etc/setWifiSD.sh
fi

# Check if an SSID is configured  
ssid=`cat /mnt/mtd/wpa.conf | grep 'ssid="' | cut -d '"' -f2`
if [ `echo $ssid | wc -w` -gt 0 ]
then
# SSID is configured, try to connect to it 
	echo "[network.sh] SSID [$ssid] configured, try connecting ..."
	/etc/init.d/8188_sta.sh
	if [ $? -ne 0 ]
	then
	# Cannot connect to SSID, check if the ssid is down or else passkey is wrong, check if there is a backup WiFi and try that one 
		echo "[network.sh] SSID [$ssid] configured but cannot connect to it, check if online ..."
		if [ `iwlist wlan0 scan |grep "$ssid" | wc -l` -eq 0 ]
		then
		# SSID not online, temporarely or no longer available, exit 2 and reboot to retry  
			echo "[network.sh] SSID [$ssid] not online for connection, exit 2 and retry later ..."
			/bin/camcli e
			exit 2
		else
		# SSID is online, could not connect to it must be credential issue check for backup ssid
			echo "[network.sh] SSID [$ssid] online cannot connect to it, must be wrong passkey, check for backup ..."
			if [ -e /mnt/mtd/wpa.conf2 ] 
			then
				ssid2=`cat /mnt/mtd/wpa.conf2 | grep ssid | cut -d '"' -f2`
				echo "[network.sh] found fallback SSID [$ssid2], trying ... "	
				mv /mnt/mtd/wpa.conf2 /mnt/mtd/wpa.conf
				reboot
			else
			# Cannot connect to SSID, must be wrong password, continue to AP mode		
				echo "[network.sh] SSID [$ssid] online cannot connect to it, must be wrong passkey, continue to AP mode ..."
			fi
		fi
	else
	# Connected succesfully, exit 0 and continue normal operation
	        echo "[network.sh] connected successfully to [$ssid], exit 0 and continue normal operation ..."
	      	exit 0
	fi
else
# No SSID configured goto AP mode
	echo "[network.sh] no SSID configured, continue to AP mode ..."
fi

# ============================================================================================#
# AP MODE No SSID configured or SSID configured and online but no connection possible AP MODE #
# ============================================================================================#

echo "[network.sh] preparing for AP mode ..."

SSID=`grep ID < /etc/init.d/setUnabtoID.sh |cut -d'"' -f2|cut -d'.' -f1`
PW=$SSID"pass"

# Switch to AP mode        
echo "[network.sh] camera about to switch to AP mode with ssid : $SSID and pass : $PW ..."

/etc/init.d/8188_ap.sh

if [ $? -ne 0 ]
then
# Cannot start AP Mode, exit with error 3 
	echo "[network.sh] cannot start AP Mode, exit 3 !"
	/bin/camcli e
      	exit 3
fi

/bin/camcli b
sleep 1
/bin/camcli a
	
touch /tmp/apmode
echo "[network.sh] camera is now in WiFi AP mode for maximum of 1 hour ..."

# We are now in AP mode so exit 1 to start Camera software in AP Mode.
exit 1
  

