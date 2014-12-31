var OBJECT_TO_LIKE = 'http://lukemcfarlane.github.io/skymachine/';
var FB_APP_ID = '315954451937355';
var DL_URL = '/files/Getaway.zip';


$(document).ready(function() {
    window.Skymachine = new Skymachine(
        OBJECT_TO_LIKE,
        FB_APP_ID,
        DL_URL
    );

    function init() {
    };
    init();
});
