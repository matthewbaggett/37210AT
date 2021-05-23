var customer_type = "unabto";

function show_web()
{
	if(customer_type=="apexis")
	{
		window.open('http://www.apexis.com.cn', '_blank');
	}
}

function get_customer()
{
	return customer_type;
}

