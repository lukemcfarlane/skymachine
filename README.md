Skymachine
==========

'Share to download' Javascript library
--------------------------------------

See demo at http://lukemcfarlane.github.io/skymachine/

## Javascript files:

* js/skymachine.js
* js/application.js

## Dependencies

* js/lib/jquery-2.1.3.min.js

### Download URL

Currently set to /files/Getaway.zip. Can be changed via line 2 of application.js.

Please note that the file should be a zip file for it to actually download,
otherwise some browsers will just open the mp3 file in the browser itself.

### URL to share

Currently set to the Youtube video on the page (https://www.youtube.com/watch?v=SODc_OipAKQ).

Can be changed via line 1 of application.js.

If setting to a web page ensure that Facebook open graph meta tags exist so that it renders correctly in Facebook. See lines 14-16 in index.html for an example.

### Facebook App Id

Configurable via line 3 of application.js.

### Page markup requirements

* The javascript is configured to look for a link tag with id = 'share-link'. 
* A div with class = 'shareWrapper' will have contents replaced with a download confirmation message when the automatic download begins.





