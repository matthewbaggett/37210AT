#!/bin/sh

if [ ! -e /etc/init.d/setUnabtoID.sh ] 
then
	echo "[runUnabtoID.sh] setUnabtoID.sh not present, unabtoCamera not started !" >> /network.txt
	exit 1
fi

source /etc/init.d/setUnabtoID.sh

if [ -z $UNABTO_ID ] || [ -z $UNABTO_KEY ] 
then
	echo "[runUnabtoID.sh] Unabto ID and KEY are not set, unabtoCamera not started !" >> /network.txt
	exit 2
else
	echo "[runUnabtoID.sh] unabtoCamera starting with ID : $UNABTO_ID ..." >> /network.txt
	/bin/unabtoCamera -a -d $UNABTO_ID -s -x -k $UNABTO_KEY &
fi 

exit 0
