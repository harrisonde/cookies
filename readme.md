Cookies
========

## It does all the heavy lifting so you don't have too.

##What is Cookies.js?
A lightweight vanilla JavaScript plugin to set, get and remove cookies. 

####How Cookies Works
Cookies.js is dependency free plugin that remembers information about a user.  When a user visits a web page, Cookies.js can store data about that user.

####Parameters
| Parameter        | Default           | Definition  |
| :-------------: |:-------------:| :-----:|
| cname  | null | name of the cookie |
| cvalue | null | value of the cookie  |
| exdays | null | number of days until expiration or 'session' to set in-memory / transient cookie   |

####Set Cookie

#####You can set yourself a cookie with setCookie(). You will need to provide the following arguments:

	1.	cname - name of the cookie
	2.	cvalue - the value of the cookie
	3.	exdays - expiration date in days

```html
	// Set a new cookie with arguments
	setCookie('asweetcookie','chocolate','2');
```

####Get Cookie

You can get a cookie with getCookie(). You will need to provide the following arguments to get your cookie:

	1.	cname

```html
	// Get a cookie with arguments
	getCookie('asweetcookie');
```

####Remove Cookie

You can remove a cookie with removeCookie(). You will need to provide the following arguments:

	1.	cname

```html
	// Remove a cookie with arguments
	removeCookie('asweetcookie');
```

####Error Handling
At any point in time if you call a function and receive a non-zero return, you have yourself an error (sad day). If you'd like to learn more about the error, take a look at window.unbakedCookies in the console. This variable is a neat little object to tell you what has gone wrong. It provides the function name where the error occurred (a human readable error message) and a numerical error message.

![Example of unbakedCookies in the console.](example/img/unbakedCookies.png "Console Error")