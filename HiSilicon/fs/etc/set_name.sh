NAME=$(grep camDesc < /mnt/mtd/equinfo_conf)

if [ -e /mnt/sd/camera_name.txt ]
then
 	echo "[set_name.sh] camera_name.txt found on SD card, copying it over"
	cp /mnt/sd/camera_name.txt /mnt/mnd/camera_name.txt
fi

NAME=$(cat /mng/sd/camera_name.txt)

sed -i 's/'"IP CAMERA"'/'"$NAME"'/' /mnt/mtd/equinfo_conf
