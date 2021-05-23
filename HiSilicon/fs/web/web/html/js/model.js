var PROD_MODEL_NULL=0;

var PROD_MODEL_APM_H804=1;
	
var PROD_MODEL_APM_H501=2;
var PROD_MODEL_APM_H501_MPC=3;

var PROD_MODEL_APM_INVALID_H502=4;

var PROD_MODEL_APM_H803=5;
var PROD_MODEL_APM_H803_MPC=6;

var PROD_MODEL_APM_H901=7;
var PROD_MODEL_APM_H901_MPC=8;

var PROD_MODEL_APM_H602=9;
var PROD_MODEL_APM_H602_MPC=10;

var PROD_MODEL_APM_H803_Z=11;
var PROD_MODEL_APM_H803_MPC_Z=12;
var PROD_MODEL_APM_H602_Z=13;
var PROD_MODEL_APM_H602_MPC_Z=14;

var PROD_MODEL_APM_H804_MPC=15;

var PROD_MODEL_APM_H701=16;
var PROD_MODEL_APM_H701_MPC=17;

var PROD_MODEL_APM_H502=18;
var PROD_MODEL_APM_H606=19;
var PROD_MODEL_APM_H702=20;

var PROD_MODEL_APM_H501_C=21;
var PROD_MODEL_APM_H901_C=22;
var PROD_MODEL_APM_H602_C=23;
var PROD_MODEL_APM_H701_C = 24;

var PROD_MODEL_APM_H606A = 25;
var PROD_MODEL_APM_H806_MPC = 26;
var PROD_MODEL_APM_H403_MPC = 27;

var PROD_MODEL_APM_H0410 = 28;

function get_product_model(model)
{
    var ret_model=0;
    
    if(model=='APM-H804')
    {
        ret_model = PROD_MODEL_APM_H804;
    }
    else if(model=='APM-H501')
    {
        ret_model = PROD_MODEL_APM_H501;
    }
    else if(model=='APM-H501-MPC')
    {
        ret_model = PROD_MODEL_APM_H501_MPC;
    }
    else if(model=='APM-H803')
    {
        ret_model = PROD_MODEL_APM_H803;
    }
    else if(model=='APM-H803-MPC')
    {
        ret_model = PROD_MODEL_APM_H803_MPC;
    }
    else if(model=='APM-H901')
    {
        ret_model = PROD_MODEL_APM_H901;
    }
    else if(model=='APM-H901-MPC')
    {
        ret_model = PROD_MODEL_APM_H901_MPC;
    }
    else if(model=='APM-H602')
    {
        ret_model = PROD_MODEL_APM_H602;
    }
    else if(model=='APM-H602-MPC')
    {
        ret_model = PROD_MODEL_APM_H602_MPC;
    }
    else if(model=='APM-H803-Z')
    {
        ret_model = PROD_MODEL_APM_H803_Z;
    }
    else if(model=='APM-H803-MPC-Z')
    {
        ret_model = PROD_MODEL_APM_H803_MPC_Z;
    }
    else if(model=='APM-H602-Z')
    {
        ret_model = PROD_MODEL_APM_H602_Z;
    }
    else if(model=='APM-H602-MPC-Z')
    {
        ret_model = PROD_MODEL_APM_H602_MPC_Z;
    }
    else if(model=='APM-H804-MPC')
    {
        ret_model = PROD_MODEL_APM_H804_MPC;
    }
    else if(model=='APM-H701')
    {
        ret_model = PROD_MODEL_APM_H701;
    }
    else if(model=='APM-H701-MPC')
    {
        ret_model = PROD_MODEL_APM_H701_MPC;
    }
    else if(model=='APM-H502')
    {
        ret_model = PROD_MODEL_APM_H502;
    }
    else if(model=='APM-H606')
    {
        ret_model = PROD_MODEL_APM_H606;
    }
    else if(model=='APM-H702')
    {
        ret_model = PROD_MODEL_APM_H702;
    }
    else if(model=='APM-H501-C')
    {
        ret_model = PROD_MODEL_APM_H501_C;
    }
    else if(model=='APM-H901-C')
    {
        ret_model = PROD_MODEL_APM_H901_C;
    }
    else if(model=='APM-H602-C')
    {
        ret_model = PROD_MODEL_APM_H602_C;
    }
    else if(model=='APM-H701-C')
    {
        ret_model = PROD_MODEL_APM_H701_C;
    }
    else if (model == 'APM-H606A') 
    {
        ret_model = PROD_MODEL_APM_H606A;
    }
    else if (model == 'APM-H806-MPC') 
    {
        ret_model = PROD_MODEL_APM_H806_MPC;
    }
    else if (model == 'APM-H403-MPC') 
    {
        ret_model = PROD_MODEL_APM_H403_MPC;
    }
    else if (model == 'APM-H0410') 
    {
        ret_model = PROD_MODEL_APM_H0410;
    }
    
    
    return ret_model;
}


function get_product_server(text)
{
    var iret = 0;
    
    if( text.charAt(0)=='1' )
    {
        iret = 1;
    }
    
    return iret;
}
function get_product_cliver(text)
{
    var iret = 0;
    
    if( (text.charAt(0)=='1') && (text.charAt(1)=='.') )
    {
        iret=1;
    }
    else if( (text.charAt(0)=='2') && (text.charAt(1)=='.') )
    {
        iret=2;
    }
    else if( (text.charAt(0)=='3') && (text.charAt(1)=='.') )
    {
        iret=3;
    }
    else if( (text.charAt(0)=='4') && (text.charAt(1)=='.') )
    {
        iret=4;
    }
    else if( (text.charAt(0)=='5') && (text.charAt(1)=='.') )
    {
        iret=5;
    }
    else if( (text.charAt(0)=='6') && (text.charAt(1)=='.') )
    {
        iret=6;
    }
    else if( (text.charAt(0)=='7') && (text.charAt(1)=='.') )
    {
        iret=7;
    }
    else if( (text.charAt(0)=='8') && (text.charAt(1)=='.') ) 
    {
        iret = 8;
    }
    else if( (text.charAt(0)=='9') && (text.charAt(1)=='.') ) 
    {
        iret = 9;
    }
    else if( (text.charAt(0)=='1') && (text.charAt(1)=='0') ) 
    {
        iret = 10;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '1')) 
    {
        iret = 11;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '2')) 
    {
        iret = 12;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '3')) 
    {
        iret = 13;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '4')) 
    {
        iret = 14;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '5')) 
    {
        iret = 15;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '6')) 
    {
        iret = 16;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '7')) 
    {
        iret = 17;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '8')) 
    {
        iret = 18;
    }
    else if ((text.charAt(0) == '1') && (text.charAt(1) == '9')) 
    {
        iret = 19;
    }
    
    return iret;
}




function ShowPTZSet(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 1;
        }
        break;
	default:
		break;
	}

	return iret;
}
function ShowOutAlarm2Set(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 1;
		}
		break;
    case PROD_MODEL_APM_H803:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 0;
        }
        break;
	default:
		break;
	}

	return iret;
}
function ShowLightSet(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 1;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 0;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 1;
        }
        break;
	default:
		break;
	}

	return iret;
}
function ShowCruiseSet(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 1;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:   
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 0;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 1;
        }
        break;
	default:
		break;
	}

	return iret;
}



function ShowZoomSet(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 1;
        }
        break;
	default:
		break;
	}

	return iret;
}
function ShowFocusSet(model)
{
	var  iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 1;
        }
        break;
	default:
		break;
	}

	return iret;
}
function ShowIrisSet(model)
{
	var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 0;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 0;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 0;
        }
        break;
	default:
		break;
	}

	return iret;
}

function ShowTitlBtn(model)
{
    var iret=0;

	switch(model) 
	{
	case PROD_MODEL_APM_H804:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H804_MPC:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H501:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H501_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H803:
		{
			iret = 1;
		}
		break;
    case PROD_MODEL_APM_H803_MPC:
    case PROD_MODEL_APM_H806_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H901:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H901_MPC:
		{
			iret = 0;
		}
		break;
	case PROD_MODEL_APM_H602:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H602_MPC:
		{
			iret = 1;
		}
		break;
	case PROD_MODEL_APM_H803_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H803_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H602_MPC_Z:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H701:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H701_MPC:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H502:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H606A:
	case PROD_MODEL_APM_H606:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H702:
	    {
	        iret = 1;
	    }
	    break;
	case PROD_MODEL_APM_H501_C:
	    {
	        iret = 1;
	    }
	    break;
    case PROD_MODEL_APM_H901_C:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H602_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H701_C:
        {
            iret = 1;
        }
        break;
    case PROD_MODEL_APM_H403_MPC:
        {
            iret = 0;
        }
        break;
    case PROD_MODEL_APM_H0410:
        {
            iret = 0;
        }
        break;
	default:
		break;
	}

	return iret;
}

function GetMStreamFrame(model)
{
    var iret = 30;
    
    switch(model) 
    {
    case PROD_MODEL_APM_H502:
    //case PROD_MODEL_APM_H606:
    case PROD_MODEL_APM_H702:
        {
            iret = 25;
        }
        break;
    default:
        {
            iret = 30;
        }
        break;
    }
    
    return iret;
}

function GetSStreamFrame(model)
{
    var iret = 30;
    
    switch(model) 
    {
    case PROD_MODEL_APM_H502:
    //case PROD_MODEL_APM_H606:
    case PROD_MODEL_APM_H702:
        {
            iret = 25;
        }
        break;
    default:
        {
            iret = 30;
        }
        break;
    }
    
    return iret;
}

function ShowPushFunc(model)
{
    var iret = 1;
    
    switch(model)
    {
    case PROD_MODEL_APM_H502:
    case PROD_MODEL_APM_H606A:
    case PROD_MODEL_APM_H606:
    case PROD_MODEL_APM_H702:
        {
            iret = 0;
        }
        break;
    default:
        {
            iret = 1;
        }
        break;
    }
    
    return iret;
}

function ShowWebMobile(model)
{
    var iret = 1;
    
    switch(model)
    {
    case PROD_MODEL_APM_H502:
    case PROD_MODEL_APM_H606A:
    case PROD_MODEL_APM_H606:
    case PROD_MODEL_APM_H702:
        {
            iret = 0;
        }
        break;
    default:
        {
            iret = 1;
        }
        break;
    }
    
    return iret;
}