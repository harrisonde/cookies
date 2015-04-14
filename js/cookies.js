/*
* 
*
* Cookies.js
* 
*
* Harrison DeStefano
* harrison.destefano@gmail.com
*
* A little script to help set, get and remove cookies.
*
*
*/	
// set cookie with args
function setCookie(cname, cvalue, exdays)
{	
	try
	{
		var cookie, expires;
		
		// in-memory cookie or transient cookie
		if(exdays == 'session')
		{
	
			// Create cookie
			cookie = cname + "=" + cvalue + "; ";
		
		}
		else
		{	
			// Get current date
			var d = new Date();
		
			// Get current time
			d.setTime(d.getTime()+(exdays*24*60*60*1000));
		
			// number of days before the cooke expires converted to string
			expires = "expires="+d.toGMTString();
			
			// Create cookie
			cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
			
		}
		
		// Set the cookie
		document.cookie = cookie;
		
		return 0;
		
	}	
	catch(error)
	{
		// cannnot set cookie, log error and return error code 
		errorCookie('1', 'cannot set your cookie.', 'setCookie()');
		return 1;
	}
}

// get cookie value by arg
function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	
	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0){
			return c.substring(name.length,c.length);
		} 	
	}
	// no cookie, log error and return error code 
	errorCookie('1', 'cannot find your cookie.', 'getCookie()');
	return 1;
}

// remove cookie by arg
function removeCookie(cname)
{
	
	// check for cookie
	var cookie = getCookie(cname);
	
	if(cookie == 1){
		
		// no cookie, log error and return error code 
		errorCookie('1', 'cannot remove your cookie.', 'removeCookie()');
		return 1;
	}
	
	// Get current date
	var d = new Date();
		
	// set to some date way back in the day
	d.setFullYear(1970);
	
	// Remove cookie by pre-date
	document.cookie = cname + "=; expires=" + d; 
	
	return 0;
	
}

function errorCookie(errorCode, error, cause){
	
	// make obj to hold our errors
	if(window.unbakedCookies == undefined){
		
		window.unbakedCookies = new Object;
	
	}
	try
	{
		// make the error known
		unbakedCookies[cause] = { errorCode : errorCode, error : error };
	}
	catch(error)
	{
		
		// let us know what went wrong
		return error;
		
	}
}