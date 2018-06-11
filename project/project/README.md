# SetingFBdevelopers

Some features for fb developers setting.

# django.core.exceptions.ImproperlyConfigured problem for Django2  

```
django.core.exceptions.ImproperlyConfigured: Application labels aren't unique, duplicates

In setting.py module remove 'django.contrib.auth' from INSTALLED_APPS.
```

# FBdevelopers

```
FOR STATUS "IN DEVELOPMENT"

1) Setting -> Basic
Add Platform - select Website. 
Set site URL http://localhost:PORT/
Set App Domains like localhost

2) Facebook Login -> Setting 
Client OAuth Login - yes.
Web OAuth Login - yes.
Embedded Browser OAuth Login - yes.
Login from Devices - yes.
Valid OAuth redirect URIs http://localhost:PORT/

Add more users for testing

1) Roles -> Roles
Add Testers and set user id from fb
```

# References

```
https://www.webforefront.com/django/setupdjangosocialauthentication.html
```
