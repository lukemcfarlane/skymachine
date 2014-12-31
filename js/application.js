var OBJECT_TO_LIKE = 'http://lukemcfarlane.github.io/skymachine/';
var FB_APP_ID = '315954451937355';
var DL_URL = '/files/Getaway.zip';

function init() {
    window.Skymachine = new Skymachine(
        OBJECT_TO_LIKE,
        FB_APP_ID,
        DL_URL
    );

    debugger
    $('#share-link').click(function() {
        Skymachine.share(function() {
            Skymachine.startDownload();
        });
    });
};

$(document).ready(function() {
    init();
});
