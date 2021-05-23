while :
do
	sleep 60s
	TS=`date`
 
	pgrep avcapture > /dev/null
	if [ $? -ne 0 ]
	then
		echo "[waakhond.sh] $TS : avcapture not running !"
#		/bin/avcapture &
#		echo "[waakhond.sh] $TS : avcapture re-started !"
	fi

	pgrep rtspd > /dev/null
	if [ $? -ne 0 ]
	then
		echo "[waakhond.sh] $TS : rtspd not running !"
	fi

	pgrep unabtoCamera > /dev/null
	if [ $? -ne 0 ]
	then
		echo "[waakhond.sh] $TS : unabtoCamera not running !"
	fi

	pgrep snapshotserver > /dev/null
	if [ $? -ne 0 ]
	then
		echo "[waakhond.sh] $TS : snapshotserver not running !"
#		/bin/snapshotserver > /snapshotserver.txt &
#		echo "[waakhond.sh] $TS : snapshotserver re-started !"
	fi

	pgrep ntpd > /dev/null
	if [ $? -ne 0 ]
	then
		echo "[waakhond.sh] $TS : ntpd not running !"
		ntpd -p 0.homewizard.pool.ntp.org -p 1.homewizard.pool.ntp.org -p 2.homewizard.pool.ntp.org
		echo "[waakhond.sh] $TS : ntpd re-started !"
	fi
done

