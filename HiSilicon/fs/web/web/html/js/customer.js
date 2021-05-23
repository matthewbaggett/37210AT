var customer_type="unabto";

function show_web()
{
    if (customer_type=="unabto")
	{
	    window.open('http://cameras.smartwares.eu', '_blank');
	}
}

function get_customer()
{
	return customer_type;
}

