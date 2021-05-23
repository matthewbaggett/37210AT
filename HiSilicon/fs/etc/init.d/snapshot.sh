#!/bin/sh
MAX=95
 				
# Endless loop
while :
do

# Check if the mountpoint is mounted (sd card) and if so, proceed, else do nothing
# Note that if SD card is mounted and removed while the camera is on, the mountpoint remains !!
 
mountpoint -q /mnt/sd

if [ $? -eq 0 ] && [ ! -e /mnt/mtd/privacy_on ]; then

	# Check if snapshot directory exists, if not , create it
	if [ ! -d /mnt/sd/snapshot ]; then
		mkdir /mnt/sd/snapshot
	fi

	# Check if symbolic link exists, if not , create it
	if [ ! -d /web/html/snapshot ]; then
		ln -s /mnt/sd/snapshot /web/html/snapshot
	fi
 
	# Make sure the web snapshot directory contains index.html
	touch /web/html/snapshot/index.html

        # Check how full the sdcard is
        gebruik=`df -h /mnt/sd | grep -vE '^Filesystem' | awk '{ print $5}'  | cut -d'%' -f1`

        # If usage is over the max, remove oldest folder
        if [ $gebruik -ge $MAX ]; then
		dirs=`ls /mnt/sd/snapshot/|wc -l`
                oldest=`ls -r /mnt/sd/snapshot/|tail -n 1`
                if [ -z $oldest ] || [ $dirs -le 7 ]; then
                	:
                else
                	rm -r /mnt/sd/snapshot/$oldest
                fi
        fi

        datum=`date +%Y-%m-%d-%H-%M`
        dag=${datum:0:10}
        tijd=${datum:11:5}
        minuut=${datum:15:1}
 
				# Make sure we are on a 10 minute cycle       
        while [ $minuut -ne 0 ] 
        do  
	       				sleep 60s
        				datum=`date +%Y-%m-%d-%H-%M`
        				dag=${datum:0:10}
        				tijd=${datum:11:5}
        				minuut=${datum:15:1}
        done
  
        # Check if directory for today already exists, if not , create it      
        folder="/mnt/sd/snapshot/"$dag

        if [ ! -d "$folder" ]; then
                mkdir $folder
        fi

	# Find the latest snapshot in /tmp directory and copy to sdcard,  if copy unsuccesful retry 2 times
	retry=0;

       	bestand=`ls -rt /tmp/*.jpg | tail -n1`
       	cp "$bestand" $folder/$tijd.jpg

	while [ $? -ne 0 ] && [ $retry -lt 3 ]
	do	
		retry=$((retry+1))
		bestand=`ls -rt /tmp/*.jpg | tail -n1`
		cp "$bestand" $folder/$tijd.jpg
	done

	# Create a .tar file with all snapshots of this day sofar
#	tar -cf $folder/$dag.tar $folder/??-??.jpg

	# At the end of this day, remove all automatic snapshots and only keep the tar file
#	if [ $tijd == "23:50" ] 
#	then
#		rm $folder/??-??.jpg
#	fi
fi

# Wait 1 minute and resync
sleep 60s
done

