if [ -e /bin/snapshotserver ]
then
	pgrep snapshotserver

	if [ $? -eq 0 ]
	then
		echo "[swap_webserver] Snapshotserver already started, exiting !"
		exit 0
	fi

	echo "[swap_webserver] Starting snapshotserver in background..."
	/bin/snapshotserver > /snapshotserver.txt &
	sleep 2s

	pgrep snapshotserver
	
	if [ $? -ne 0 ]
	then
		echo "[swap_webserver] Snapshotserver not started, exiting !"
		exit 2
	fi

	proc=`pgrep mini_httpd`

	if [ $? -eq 0 ]
	then
		echo "[swap_webserver] Webserver found, killing proces..." 
		kill $proc	
	else
		echo "[swap_webserver] No running webserver found..."
	fi
else
	echo "[swap_webserver] Cannot find snapshotserver binary, exiting !"
	exit 1
fi

exit 0

