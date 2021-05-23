#!/bin/sh

# count1=`hexdump -n2 /mnt/mtd/alarminfo | awk '{ print $2}'`
# It seems this counter does not get updated after 50 times ?
 
count1=`ls -l /mnt/mtd/alarminfo | awk '{ print $6,$7,$8}'`

# Endless loop
 
while :
do
count2=`ls -l /mnt/mtd/alarminfo | awk '{ print $6,$7,$8}'`
if [ "$count2" != "$count1" ] 
then
	source /etc/mansnap.sh 
	count1=$count2
fi	 
sleep 1s
done


