echo '================================================================'
echo "$(grep UNABTO_ID /etc/init.d/setUnabtoID.sh | cut -d'=' -f2) at $(date)"
echo '================================================================'

echo
unabtoCamera -V

echo
sha256sum /bin/rtspd
sha256sum /bin/avcapture
sha256sum /bin/avsave
sha256sum /lib/libapxmain.so

echo
df -k

echo
grep -e ssid -e psk /mnt/mtd/wpa.conf

echo
echo $(wc -l /mnt/mtd/admin_conf)

echo
pgrep avcapture > /dev/null
if [ $? -eq 0 ]
then
	echo 'avcapture OK ...'
else
	echo 'avcapture NOT OK ...'
fi

pgrep avsave > /dev/null
if [ $? -eq 0 ]
then
	echo 'avsave OK ...'
else
	echo 'avsave NOT OK ...'
fi

pgrep rtspd > /dev/null
if [ $? -eq 0 ]
then
	echo 'rtspd OK ...'
else
	echo 'rtspd NOT OK ...'
fi

pgrep snapshotserver > /dev/null
if [ $? -eq 0 ]
then
	echo 'snapshotserver OK ...'
else
	echo 'snapshotserver NOT OK ...'
fi

pgrep ntpd > /dev/null
if [ $? -eq 0 ]
then
	echo 'ntpd OK ...'
else
	echo 'ntpd NOT OK ...'	
fi

echo
mountpoint -q /mnt/sd

if [ $? -eq 0 ] 
then
	echo 'SD card found, test writing ...'
	touch /mnt/sd/test
	if [ $? -eq 0 ] 
	then
		echo 'Writing to SD card succesful !'
		rm /mnt/sd/test 
	else
		echo 'Error writing to SD card'
	fi	

else
	echo 'No SD card found !'
fi