
set_path_before()
{
	[ -d $1 ] && PATH="$1:$PATH"
}

PATH="/usr/bin:/usr/sbin:/bin:/sbin:/app/bin"
set_path_before /usr/local/sbin
set_path_before /usr/local/bin

LD_LIBRARY_PATH="/usr/local/lib:/usr/lib:/app/lib"

export PATH
export LD_LIBRARY_PATH

# ANSI COLORS
CRE="
[K"
NORMAL="[0;39m"
RED="[1;31m"
GREEN="[1;32m"
YELLOW="[1;33m"
BLUE="[1;34m"
MAGENTA="[1;35m"
CYAN="[1;36m"
WHITE="[1;37m"

umask 022

echo "${GREEN}Welcome to HiLinux.${NORMAL}"

                                

cat /etc/product > /tmp/cpu_type
read NAME CPUTYPE < /tmp/cpu_type
echo cputype is $CPUTYPE

MACHINE_CONF=/app/etc/machine_conf

if [ -e $MACHINE_CONF ]; then
	cat $MACHINE_CONF | grep SENSOR > /tmp/sensor_type
		read NAME SENSORTYPE < /tmp/sensor_type
fi

echo SENSORTYPE is $SENSORTYPE
 
cd /root
	


echo 49 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio49/direction
echo 0 > /sys/class/gpio/gpio49/value
sleep 1
echo 1 > /sys/class/gpio/gpio49/value

insmod /ko/rtl8188fu.ko

mkdir -p /var/run

mkdir -p /lib/modules/3.10.14__isvp_turkey_1.0__

insmod /lib/modules/audio.ko 
insmod /lib/modules/tx-isp-t21.ko isp_clk=100000000
insmod /lib/modules/sensor_jxf37_t21.ko sensor_gpio_func=0

insmod /lib/modules/t21_ioOut_drv.ko
insmod /lib/modules/reset_drv.ko




if [ -e /mnt/mtd/wifimode_conf ]; then
        read NAME MODE < /mnt/mtd/wifimode_conf
else
        MODE=sta
fi

if [ -e $MACHINE_CONF ]; then
	cat $MACHINE_CONF | grep wifi_module > /tmp/wifi_module.conf
	read NAME WIFIMODULE < /tmp/wifi_module.conf
fi
echo "$WIFIMODULE"


ifconfig ra0 192.168.1.62
ifconfig wlan0  192.168.1.62

avcapture &
rtspd &



