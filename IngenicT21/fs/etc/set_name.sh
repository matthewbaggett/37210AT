NAME=$(grep camDesc < /mnt/mtd/equinfo_conf)

if [ "${NAME:8:9}" != "IP CAMERA" ]
then
        exit 1
fi

ID=$(grep ID < /etc/init.d/setUnabtoID.sh)
KEY=${ID:11:7}

sed -i 's/'"IP CAMERA"'/'"$KEY"'/' /mnt/mtd/equinfo_conf
