var URL_TO_SHARE = 'https://www.youtube.com/watch?v=SODc_OipAKQ';
var DOWNLOAD_URL = '/files/Getaway.zip';
var FB_APP_ID = '315954451937355';

function init() {
    window.Skymachine = new Skymachine({
        urlToShare: URL_TO_SHARE,
        fbAppId: FB_APP_ID,
        downloadUrl: DOWNLOAD_URL 
    });

    $('#share-link').click(function() {
        Skymachine.share(function(userDidShare) {
            if(userDidShare) {
                Skymachine.startDownload();
                $('.shareWrapper').html(
                    '<h2>Thanks!</h2>' +
                    '<p>The download should start automatically.</p>' +
                    '<p>If it doesn\'t then please ' + 
                    '<a href="' + URL_TO_SHARE + '">click here</a></p>.'
                );
            }
        });
    });
};

$(document).ready(function() {
    init();
});
