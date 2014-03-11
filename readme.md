Cookies
========

##A lightweight vanilla javascript plugin to set, get and remove cookies. It does all the heavylifting so you don't have too.

###Set Cookie

####You can set yourself a cookie with setCookie(). You will need to provide the following arguments:

	1.	cname - name of the cookie
	2.	cvalue - the value of the cookie
	3.	exdays - expiration date

```html
	setCookie('asweetcookie','chocolate','2');
```

###Get Cookie

You can get a cookie with getCookie(). You will need to provide the following arguments to get your cookie:

	1.	cname

```html
	getCookie('asweetcookie');
```

###Remove Cookie

You can remove a cookie with removeCookie(). You will need to provide the following arguments:

	1.	cname

```html
removeCookie('asweetcookie');
```

###Error Handling

At any point in time if you call a function and receive a non-zero return, you have yourself an error. You can take a look at the global scope for error details.

	1.	unbakedCookies - An error object to tell you what has gone wrong. Provides function that caused the error, human readable message, and numerical error message.