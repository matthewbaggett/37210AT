var vlc_plugin_installed=0;

if (navigator.plugins && navigator.plugins.length) 
{ 
	for (x=0; x<navigator.plugins.length;x++) 
	{
    	if ( (navigator.plugins[x].name=='VLC Multimedia Plug-in') || (navigator.plugins[x].name=='VLC Web Plugin') ) 
		{	
			vlc_plugin_installed=1;
			break;
		} 
	} 
} 
else if (window.ActiveXObject) 
{ 
	try
	{
		o=new ActiveXObject('VideoLAN.VLCPlugin.2'); 
		if (o) 
		{
			vlc_plugin_installed=1;
			delete o;
		}	
	} 
	catch(e) 
	{
	} 
}

if (!vlc_plugin_installed)
{
	location.replace('vlc_install.htm');
}