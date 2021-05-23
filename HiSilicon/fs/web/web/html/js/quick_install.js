var quick_plugin_installed=0;

if (navigator.plugins && navigator.plugins.length) 
{ 
	for (x=0; x<navigator.plugins.length;x++) 
	{
	    var str_plug_name = navigator.plugins[x].name;
	    var len = str_plug_name.length;
	    
	    if(len >= 9)
	    {
	        if(    (str_plug_name.charAt(0)=='Q') && (str_plug_name.charAt(1)=='u') && (str_plug_name.charAt(2)=='i')
	            && (str_plug_name.charAt(3)=='c') && (str_plug_name.charAt(4)=='k') && (str_plug_name.charAt(5)=='T') 
	            && (str_plug_name.charAt(6)=='i') && (str_plug_name.charAt(7)=='m') && (str_plug_name.charAt(8)=='e') )
		    {	
			    quick_plugin_installed=1;
			    break;
		    } 
	    }
	} 
} 

if (!quick_plugin_installed)
{
	location.replace('quick_install.htm');
}