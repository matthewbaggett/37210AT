var language=getcookie('iplanguage');
if (language=='')
	language='ipenglish';
	
if (language=='ipsimple_chinese')
	document.write('<script src="language/simple_chinese.js"><\/script>');
else if(language=='ipenglish')
	document.write('<script src="language/english.js"><\/script>');
else if(language=='ipitalian')
    document.write('<script src="language/italian.js"><\/script>');
else if (language == 'ipkorean')
    document.write('<script src="language/korean.js"><\/script>');
else if (language == 'ipspain')
    document.write('<script src="language/spain.js"><\/script>');
else if (language == 'ippoland')
    document.write('<script src="language/poland.js"><\/script>');
else if (language == 'ipgerman')
    document.write('<script src="language/german.js"><\/script>');
else if (language == 'ipfrench')
    document.write('<script src="language/french.js"><\/script>');
else if (language == 'ipjapan')
	document.write('<script src="language/japan.js"><\/script>');

function getcookie(name)
{
	var strCookie=document.cookie;
    var arrCookie=strCookie.split('; ');
    for (var i=0;i<arrCookie.length;i++)
    {
		var arr=arrCookie[i].split('=');
        if (arr[0]==name) 
			return unescape(arr[1]);
    }
    return '';
}
function setcookie(name,value,expirehours)
{
	var cookieString=name+'='+escape(value);
    if (expirehours>0)
    {
		var date=new Date();
        date.setTime(date.getTime()+expirehours*3600*1000);
        cookieString = cookieString + '; expires=' + date.toGMTString();
        document.cookie = cookieString;
	}
    document.cookie=cookieString;
}

function show_cont_error(camera,msg,err)
{
	var err_info;
	switch(err)
	{
	case 1:
		err_info=str_usalerr_noobj;
		break;
	case 2:
		err_info=str_usalerr_initobj;
		break;
	case 3:
		err_info=str_usalerr_space;
		break;
	case 4:
		err_info=str_usalerr_thread;
		break;
	case 5:
		err_info=str_conterr_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}

function show_retcont_error(camera,msg,err)
{
	var err_info;
	switch(err)
	{
	case 1:
		err_info=str_conterr_user;
		break;
	case 2:
		err_info=str_conterr_pwd;
		break;
	case 3:
		err_info=str_conterr_exmax;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}


function show_record_err(camera,msg,err)
{
    var err_info;
	switch(err)
	{
	case 1:
		err_info=str_record_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}
function show_listen_err(camera,msg,err)
{
    var err_info;
	switch(err)
	{
	case 1:
		err_info=str_audio_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}
function show_talk_err(camera,msg,err)
{
    var err_info;
	switch(err)
	{
	case 1:
		err_info=str_talk_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}


function show_getcruise_err(camera,msg,err)
{
    var err_info;
	switch(err)
	{
	case 1:
		err_info=str_get_cruiselist_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}
function show_ctrlcruise_err(camera,msg,err)
{
    var err_info;
	switch(err)
	{
	case 1:
		err_info=str_cruise_ctrl_fail;
		break;
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}

function show_clearalarm_info(camera,err)
{
    var err_info;
    
	switch(err)
	{
	case 0:
	    err_info=str_clearalarm_succ;
	    break;
	case 1:
		err_info=str_clearalarm_fail;
		break;
	default:
		break;
	}

	alert(camera+' : '+err_info);
}

function show_notifyalarm_info(camera,err)
{
    var err_info;
    
	switch(err)
	{
	case 4:
	    err_info=str_sdcalarm_pullout;
	    break;
	case 5:
		err_info=str_sdcalarm_space;
		break;
	case 6:
		err_info=str_sdcalarm_write;
		break;
	default:
		break;
	}

	alert(camera+' : '+err_info);
}