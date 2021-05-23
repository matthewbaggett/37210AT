LINES=`wc -l < /mnt/mtd/admin_conf`

if [ $LINES -lt 11 ]
then
	echo "[rtsp_user] admin_conf file incomplete..."
	ADM=`grep admin < /mnt/mtd/admin_conf`
	sed -i '1s/.*/'"$ADM"'/' /mnt/mtd/admin_default
	cp -f /etc/admin_default /mnt/mtd/admin_conf
fi

user=`grep ID < /etc/init.d/setUnabtoID.sh|cut -d'"' -f2 |cut -d'.' -f1`
pw=`date | sha256sum | cut -c -20`

sed -i '10s/.*/'"$user"':'"$pw"':3/' /mnt/mtd/admin_conf

echo "[rtsp_user] Rtsp visitor $user created..."

