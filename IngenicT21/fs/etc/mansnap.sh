#!/bin/sh
MAX=95
  
# Check if the SD card is mounted and if so, proceed, else do nothing
# Note that if SD card is removed while the camera is on, the mountpoint remains !!
 
`mountpoint -q /mnt/sd`

if [ $? -eq 0 ]; then

	# Check if snapshot directory exists, if not , create it
	if [ ! -d /mnt/sd/snapshot ]; then
		mkdir /mnt/sd/snapshot
	fi

	# Check if symbolic link exists, if not , create it
	if [ ! -d /web/html/snapshot ]; then
		ln -s /mnt/sd/snapshot /web/html/snapshot
	fi
 
        dag=`date +%Y-%m-%d`
	webfolder="/snapshot/"$dag
        # Check if directory for today already exists, if not , create it      
        folder="/mnt/sd/snapshot/"$dag

        if [ ! -d "$folder" ]; then
                mkdir $folder
        fi

# Find the latest JPG file in /tmp directory and copy to sdcard,  if copy unsuccesful retry 3 times  
	retry=0;

        bestand=`ls -rt /tmp/*.jpg | tail -n1`
        cp "$bestand" $folder/snapshot.jpg

	while [ $? -ne 0 ] && [ $retry -lt 3 ]
	do	
		retry=$((retry+1))
		bestand=`ls -rt /tmp/*.jpg | tail -n1`
		cp "$bestand" $folder/snapshot.jpg
	done

# Get the name of the current active video file if recording is active , look for a  fd pointing to *video* for the avsave process
# This may take some time so retry 10 times, approx 1 second
	retry=0;
	pid=`pgrep avsave`

	unset key;

	while [ -z "$key" ] && [ $retry -lt 10 ]  
	do 
		usleep 100000
		key=`ls -l /proc/$pid/fd | grep video |cut -d'>' -f2 |sort |tail -1`
		retry=$((retry+1))
	done	 

# Check if video file was found, if so use its name (OLD or NEW) : /mnt/sd/video/2018-10-04/20181004-131329-P.mp4
# else use current time for snapshot name so it is still possible to send notifications with a snapshot for motion detection without recording 
	
	if [ -z "$key" ] 
	then
		tijd=`date +%H-%M-%S`
	else
		if [ ${key:34:1} == '-'  ]
		then
			tijd=${key:35:6}
		else
			tijd=${key:37:6}
		fi	
	fi

# Finally rename snapshot to the proper name and if succesful, echo name

	mv $folder/snapshot.jpg $folder/$tijd.jpg	

	
	if [ $? -eq 0 ]
	then
		echo -n $webfolder/$tijd.jpg
	fi
fi
