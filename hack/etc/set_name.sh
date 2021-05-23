NAME=$(grep camDesc < /mnt/mtd/equinfo_conf)

if [ -e /mnt/sd/camera_name.txt ]
then
 	echo "[set_name.sh] camera_name.txt found on SD card, copying it over"
	cp /mnt/sd/camera_name.txt /mnt/mtd/camera_name.txt
fi

if [ -e /mnt/mtd/camera_name.txt ]
then
  NAME=$(cat /mnt/mtd/camera_name.txt)
fi

echo "[set_name.sh] Setting name to ${NAME}"
hostname ${NAME}
sed -i "s|camDesc .*|camDesc ${NAME}|g" /mnt/mtd/equinfo_conf
