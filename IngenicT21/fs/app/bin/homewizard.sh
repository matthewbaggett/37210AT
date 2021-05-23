# This script is invoked from rtspd and should NOT block (and neither should any of the scripts it starts, like network.sh !)
# !!! If rtspd is blocked, the reset button will no longer reboot the camera !!!

mv /network.txt /network.bak
 
echo
echo "[homewizard.sh] ----------------------> Started <----------------------" 
echo "[homewizard.sh] ----------------------> Started <----------------------" 
echo "[homewizard.sh] ----------------------> Started <----------------------" 
echo 
# Invoke the Network script that sets up STA or AP mode 
/etc/init.d/network.sh > /network.txt 

# Check return code, if > 1 : Error so retry later, if == 1 : APmode so start unabtoCamera only, if == 0 continue as usual
RC=$?
 
if [ $RC -gt 1 ]
then
# Error mode, cannot proceed. Start watchdog to reboot after nn minutes
	echo "[homewizard.sh] network not started, SSID offline or AP Mode could not be started  !" >> /network.txt 
	/etc/watchErrorMode.sh &
	echo
	echo "[homewizard.sh] ----------------------> Ended ERROR <----------------------"
	echo "[homewizard.sh] ----------------------> Ended ERROR <----------------------" 
	echo "[homewizard.sh] ----------------------> Ended ERROR <----------------------"
	echo 
	exit 1
elif [ $RC -eq 1 ]
then
# AP Mode, start unabtoCamera in AP Mode and start watchdog that terminates AP Mode after 1 hour
	echo "[homewizard.sh] starting unabtoCamera in AP mode ..." >> /network.txt 
	/etc/init.d/runUnabto.sh
	/etc/watchAPMode.sh &
	echo
	echo "[homewizard.sh] ----------------------> Ended AP MODE <----------------------"
	echo "[homewizard.sh] ----------------------> Ended AP MODE <----------------------" 
	echo "[homewizard.sh] ----------------------> Ended AP MODE <----------------------"
	echo  
	exit 0
fi 

# Normal mode, start allprocesses

echo "[homewizard.sh] starting unabtoCamera in normal mode ..." >> /network.txt
  
/etc/set_name.sh
/etc/init.d/clearVideoSymlinks.sh

retry=0;

ntpd -p 0.homewizard.pool.ntp.org -p 1.homewizard.pool.ntp.org -p 2.homewizard.pool.ntp.org

while [ $? -ne 0 ] && [ $retry -lt 5 ]
do
	sleep 1s
	echo "[homewizard.sh] NTPD cannot be started, retrying ..." >> /network.txt
	retry=$((retry+1))
	ntpd -p 0.homewizard.pool.ntp.org -p 1.homewizard.pool.ntp.org -p 2.homewizard.pool.ntp.org
done

if [ $? -ne 0 ]
then 
	echo "[homewizard.sh] NTPD is NOT started, time is not set ..." >> /network.txt
else
	echo "[homewizard.sh] NTPD successfully started, time set : `date` ..." >> /network.txt
fi
 
/etc/init.d/runUnabto.sh
/etc/init.d/alive.sh &
/etc/init.d/snapshot.sh &

/etc/init.d/waakhond.sh > /waakhond.txt &

echo
echo "[homewizard.sh] ----------------------> Ended NORMAL MODE <----------------------"
echo "[homewizard.sh] ----------------------> Ended NORMAL MODE <----------------------" 
echo "[homewizard.sh] ----------------------> Ended NORMAL MODE <----------------------"
echo 
 
exit 0
