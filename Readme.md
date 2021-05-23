#37210AT

What is this project? 

I took apart two flavours of an inexpensive internet-of-shit webcam called a 37210-AT. 
There are two revisions, as far as I can tell, with similar firmware but differing SoC.
Neither worked correctly with the provided android app. 
The devices were not handing out working IP addresses from its DHCPD.
It turned out that both had an exposed serial UART port.
I discovered that its entirely sketchy shell scripts that hold the whole product together.
Inside this repo are dumps of the scripts, as well as a "hack" directory which is patched copies of those scripts to neuter dialing home features.
Now they're just dump RTSP video cameras that sit on a wifi access point as defined in wpa.conf

To use this, copy the contents of /hack to a micro sd card, and gain access to the root shell on an un-patched device using the UART connector on the board. 
The default credentials are *root / I81ou812*.
Then `cd /mnt/sd` and run `sh unfuckulate.sh`.

Key features: 

* Doesn't dial home to the vendors systems
* You can decide if you want telnet to run by patching the contents of /hack
* Doesn't need an app to configure it, just modify /hack/wpa.conf (Baring in mind the hisilicon and ingenic-t21 models use different wpa configs, as seen in /hack/wpa-hisilicon.conf and /hack/wpa-ingenic.conf)
* Lets you set a camera name with /hack/camera_name.txt
