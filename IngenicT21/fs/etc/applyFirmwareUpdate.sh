#!/bin/sh

tar -xf /tmp/update.tar.gz -C / || exit;

rm /tmp/update.tar.gz
rm /tmp/signature

if [ -e /update.sh ]; then
  chmod u+x /update.sh
  /./update.sh || exit;
  rm /update.sh	
fi

reboot -f -d 10 &
