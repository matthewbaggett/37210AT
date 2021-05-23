//------------SCENE MAIN-----------------//
var SCENE_MTYPE_CCD=0;
var SCENE_MTYPE_CMOS=1;

//------------SCENE SUB--------------//
var SCENE_STYPE_OV7720=12;
var SCENE_STYPE_OV9710=32;
var SCENE_STYPE_TW9910=21;
var SCENE_STYPE_MT9M131=19;

//------------STANDARD--------------//
var STANDARD_NTSC=0;
var STANDARD_PAL=1;  

//------------RESOLU----------------//
//CCD
var RESOLU_VALUE_D1=0;  //(PAL:704*576  NTSC:704*480)
var RESOLU_VALUE_CIF=1; //(PAL:352*288  NTSC:352*240)

//CMOS
var RESOLU_VALUE_VGA=2;   //(640*480) 
var RESOLU_VALUE_QVGA=3;  //(320*240)
var RESOLU_VALUE_WXGA=4;  //(1280*720) 
var RESOLU_VALUE_QWXGA=5; //(640*368);
var RESOLU_VALUE_UXGA=6;  //(1600*1200) 
var RESOLU_VALUE_QUXGA=7; //(800*600);
var RESOLU_VALUE_SXGA=8;  //(1280*1024) 
var RESOLU_VALUE_QSXGA=9; //(640*512)
var RESOLU_VALUE_QQWXGA=10; //(320*208)
var RESOLU_VALUE_1080P=11;  //(1920*1080)
var RESOLU_VALUE_960P = 12; //(1280*960)
var RESOLU_VALUE_2048x1520 = 13;
var RESOLU_VALUE_2592x1520 = 14;

function resolu_get_typetext(scene, stand, resolu)
{
    var str_ret="";
    
    if(SCENE_MTYPE_CCD==scene)
    {
        str_ret = resolu_get_ccdtext(stand, resolu);
    }
    else if(SCENE_MTYPE_CMOS==scene)
    {
        str_ret = resolu_get_cmostext(resolu);
    }
    
    return str_ret;
}
function resolu_get_ccdtext(stand, resolu)
{
    var str_ret="";
    
    switch(resolu)
    {
    case RESOLU_VALUE_D1: //(PAL:704*576  NTSC:704*480)
        {
            str_ret = "704*576";
            if(STANDARD_NTSC == stand)
            {
                str_ret = "704*480";
            }
        }
        break;
    case RESOLU_VALUE_CIF: //(PAL:352*288  NTSC:352*240)
        {
            str_ret = "352*288";
            if(STANDARD_NTSC == stand)
            {
                str_ret = "352*240";
            }
        }
        break;
    default:
        break;
    }
    
    return str_ret;
}
function resolu_get_cmostext(resolu)
{
    var str_ret="";
    
    switch(resolu)
    {
    case RESOLU_VALUE_VGA:  //(640*480)   
        {
            str_ret = "640*480";
        }
        break;
    case RESOLU_VALUE_QVGA: //(320*240)
        {
            str_ret = "320*240";
        }
        break;
    case RESOLU_VALUE_WXGA: //(1280*720) 
        {
            str_ret = "1280*720";
        }
        break;
    case RESOLU_VALUE_QWXGA: //(640*368)
        {
            str_ret = "640*368";
        }
        break;
    case RESOLU_VALUE_UXGA:  //(1600*1200) 
        {
            str_ret = "1600*1200";
        }
        break;
    case RESOLU_VALUE_QUXGA: //(800*600)
        {
            str_ret = "800*600";
        }
        break;
    case RESOLU_VALUE_SXGA:  //(1280*1024)
        {
            str_ret = "1280*1024";
        }
        break;
    case RESOLU_VALUE_QSXGA: //(640*512)
        {
            str_ret = "640*512";
        }
        break;
    case RESOLU_VALUE_QQWXGA: //(320*208)
        {
            str_ret = "320*208";
        }
        break;
	case RESOLU_VALUE_1080P: //(1920*1080)
		{
			str_ret = "1920*1080";
		}
		break;
	case RESOLU_VALUE_960P: //(1280*960)
		{
			str_ret = "1280*960";
		}
		break;
	case RESOLU_VALUE_2048x1520:
		{
			str_ret = "2048*1520";
		}
		break;
	case RESOLU_VALUE_2592x1520:
		{
			str_ret = "2592*1520";
		}
		break;
    default:
        break;
    }
    
    return str_ret;
}


function resolu_get_defptz(type)
{
    var iret=0;
    
    switch(type)
    {
    case SCENE_STYPE_OV7720:
        {
            iret = 60;
        }
        break;
    case SCENE_STYPE_OV9710:
        {
            iret = 6;
        }
        break;
    case SCENE_STYPE_TW9910:
        {
            iret = 60;
        }
        break;
    default:
        break;
    }
    
    return iret;
}
function resolu_get_defbright(type)
{
    var iret=0;
    
    switch(type)
    {
    case SCENE_STYPE_OV7720:
        {
            iret = 128;
        }
        break;
    case SCENE_STYPE_OV9710:
        {
            iret = 128;
        }
        break;
    case SCENE_STYPE_TW9910:
        {
            iret = 128;
        }
        break;
    default:
        break;
    }
    
    return iret;
}
function resolu_get_defcontrast(type)
{
    var iret=0;
    
    switch(type)
    {
    case SCENE_STYPE_OV7720:
        {
            iret = 32;
        }
        break;
    case SCENE_STYPE_OV9710:
        {
            iret = 129;
        }
        break;
    case SCENE_STYPE_TW9910:
        {
            iret = 92;
        }
        break;
    default:
        break;
    }
    
    return iret;
}
function resolu_get_defhue(type)
{
    var iret=0;
    
    switch(type)
    {
    case SCENE_STYPE_OV7720:
        {
            iret = 0;
        }
        break;
    case SCENE_STYPE_OV9710:
        {
            iret =1;
        }
        break;
    case SCENE_STYPE_TW9910:
        {
            iret = 0;
        }
        break;
    default:
        break;
    }
    
    return iret;
}
function resolu_get_defsatura(type)
{
    var iret=0;
    
    switch(type)
    {
    case SCENE_STYPE_OV7720:
        {
            iret = 64;
        }
        break;
    case SCENE_STYPE_OV9710:
        {
            iret = 101;
        }
        break;
    case SCENE_STYPE_TW9910:
        {
            iret = 128;
        }
        break;
    default:
        break;
    }
    
    return iret;
}

function resolu_get_music(type) {
    var iret = 0;
    switch (type) {
        case SCENE_STYPE_OV7720:
            {
                iret = 1;
            }
            break;
        case SCENE_STYPE_OV9710:
            {
                iret = 10;
            }
            break;
        case SCENE_STYPE_TW9910:
            {
                iret = 10;
            }
            break;
        default:
            break;
    }
    return iret;
}
//据镜头子类型判断,是否做限制 
function SelStreamLimit(type)
{
	var iret=0;

	if( (SCENE_STYPE_MT9M131==type) || (SCENE_STYPE_OV9710==type) )
	{
		iret=1;
	}

	return iret;
}