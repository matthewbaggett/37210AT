#!/bin/sh

if [ ! -e /mnt/mtd/net_wifi_conf2 ] && [ ! -e /mnt/mtd/wpa.conf2 ]; then
  exit 1;
fi

ifconfig ra0
RA0VALID=$?

ifconfig wlan0
WLAN0VALID=$?

INTERFACE_TO_USE=''

if [ $RA0VALID -eq 0 ]; then
  INTERFACE_TO_USE='ra0'
elif [ $WLAN0VALID -eq 0 ]; then
  INTERFACE_TO_USE='wlan0'
else
  exit 1;
fi

WPAPID=$(pidof wpa_supplicant)
if [ $? -eq 0 ]; then 
  kill $WPAPID
fi

ifconfig $INTERFACE_TO_USE down
ifconfig $INTERFACE_TO_USE up
echo 'waiting for rtspd to notice that wifi is down and try reconnecting...'
sleep 75

echo 'sending ping...'
DEFAULT_ROUTE=$(ip route show default | awk '/default/ {print $3}')
PING_REMAIN=20
PING_RESULT=1

if [ -n "$DEFAULT_ROUTE" ]; then
  ping -c 1 -w 1 $DEFAULT_ROUTE
  PING_RESULT=$?
else
  sleep 1
fi


while [ $PING_RESULT -ne 0 ] && [ $PING_REMAIN -ge 0 ]; do
  PING_REMAIN=$((PING_REMAIN - 1))
  DEFAULT_ROUTE=$(ip route show default | awk '/default/ {print $3}')
  if [ -n "$DEFAULT_ROUTE" ]; then
    ping -c 1 -w 1 $DEFAULT_ROUTE
    PING_RESULT=$?
  else
    sleep 1
  fi
done

if [ $PING_RESULT -ne 0 ]; then
  if [ -e /mnt/mtd/net_wifi_conf2 ]; then
    mv /mnt/mtd/net_wifi_conf2 /mnt/mtd/net_wifi_conf
  fi
  
  if [ -e /mnt/mtd/wpa.conf2 ]; then
    mv /mnt/mtd/wpa.conf2 /mnt/mtd/wpa.conf
  fi

  WPAPID=$(pidof wpa_supplicant)
  if [ $? -eq 0 ]; then 
    kill $WPAPID
  fi
  ifconfig $INTERFACE_TO_USE down
  ifconfig $INTERFACE_TO_USE up
else
  if [ -e /mnt/mtd/net_wifi_conf2 ]; then
    rm /mnt/mtd/net_wifi_conf2
  fi
  
  if [ -e /mnt/mtd/wpa.conf2 ]; then
    rm /mnt/mtd/wpa.conf2
  fi
fi
