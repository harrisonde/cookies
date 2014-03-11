Cookies
========

##A lightweight vanilla JavaScript plugin to set, get and remove cookies. It does all the heavy lifting so you don't have too.

###Set Cookie

####You can set yourself a cookie with setCookie(). You will need to provide the following arguments:

	1.	cname - name of the cookie
	2.	cvalue - the value of the cookie
	3.	exdays - expiration date in days

```html
	// Set a new cookie with arguments
	setCookie('asweetcookie','chocolate','2');
```

###Get Cookie

You can get a cookie with getCookie(). You will need to provide the following arguments to get your cookie:

	1.	cname

```html
	// Gat a cookie with arguments
	getCookie('asweetcookie');
```

###Remove Cookie

You can remove a cookie with removeCookie(). You will need to provide the following arguments:

	1.	cname

```html
	// Remove a cookie with arguments
	removeCookie('asweetcookie');
```

###Error Handling

At any point in time if you call a function and receive a non-zero return, you have yourself an error. Sad day. If you'd like to learn more about the erros, take at window.unbakedCookies. This variable is a neat little object to tell you what has gone wrong. It provides the function name where the error occurred, a human readable error message, and numerical error message.
