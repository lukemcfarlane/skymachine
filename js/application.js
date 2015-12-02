/**
 * Automatically start song download after user
 * successfully logs in and shares a link via
 * Facebook.
 *
 * @author  http://github.com/lukemcfarlane/
 * @date    Jan 2015
 */
var YOUTUBE_CODE = 'PiKj5Ltn6vg';
var DOWNLOAD_URL = encodeURI('http://skymachine.co/download.php?name=Land_of_Black_Gold');
var FB_APP_ID = '315954451937355';

function renderShareCount(count) {
  $('#share-count span').html(count);
}

function init() {
    window.Skymachine = new Skymachine({
        youtubeCode: YOUTUBE_CODE,
        fbAppId: FB_APP_ID,
        downloadUrl: DOWNLOAD_URL
    });

    var share_count = 0;

    $.getJSON("http://api.facebook.com/method/links.getStats?urls=http://www.youtube.com/watch?v="+ YOUTUBE_CODE + "&format=json",
      function(response) {
        if (response) {
          share_count = response[0].share_count;

        renderShareCount(share_count);
    }});

    $('#share-link').click(function() {
        Skymachine.login(function(success) {
            if(success) {
                Skymachine.feed(function(userDidShare) {
                    if(userDidShare) {
                        Skymachine.startDownload();
                        $('.shareWrapper').html(
                            '<h2>Thanks!</h2>' +
                            '<p>The download should start automatically.</p>' +
                            '<p>If it doesn\'t then please ' +
                            '<a href="' + DOWNLOAD_URL + '">click here</a></p>.'
                        );
                    }
                });
            }
        });
    });
};

$(window).load(function() {
    init();
});
