if [ -e /mnt/machine_conf ]; then
        mv /mnt/machine_conf /mnt/mtd/
fi

cp /mnt/modules.tar.xz /tmp
cd /tmp
xz -d ./modules.tar.xz
tar -xvf modules.tar
rm -rf modules.tar
cd ./modules

cat /etc/product > /tmp/cpu_type
read NAME CPUTYPE < /tmp/cpu_type
echo cputype is $CPUTYPE

MACHINE_CONF=/mnt/mtd/machine_conf

if [ -e $MACHINE_CONF ]; then
        cat $MACHINE_CONF | grep SENSOR > /tmp/sensor_type
                read NAME SENSORTYPE < /tmp/sensor_type
fi

echo SENSORTYPE is $SENSORTYPE

cp /bin/load3518 ./
if [ $CPUTYPE == "HI3518EV200" ]; then
        if [[ $SENSORTYPE == "SC2135" ]] || [[ $SENSORTYPE == "OV2710" ]]; then
                ./load3518 -a -sensor ov9732 -osmem 40 -total 64
        else
                ./load3518 -a -sensor ov9732 -osmem 41 -total 64
        fi
else
        ./load3518 -a -sensor ar0237 -osmem 74 -total 128
fi

insmod higpio.ko

cd /

ifconfig lo 127.0.0.1

/sbin/insmod /tmp/modules/mtprealloc.ko
/sbin/insmod /tmp/modules/rtl8188fu.ko

chmod +x /bin/*

rm -rf /tmp/modules

avcapture &
#update &
rtspd &


