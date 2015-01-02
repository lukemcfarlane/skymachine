var URL_TO_SHARE = '/files/Getaway.zip';

function init() {
    window.Skymachine = new Skymachine({
        urlToShare: 'http://lukemcfarlane.github.io/skymachine/',
        fbAppId: '315954451937355',
        downloadUrl: URL_TO_SHARE
    });

    $('#share-link').click(function() {
        Skymachine.share(function() {
            Skymachine.startDownload();
            $('.shareWrapper').html(
                '<h2>Thanks!</h2>' +
                '<p>The download should start automatically.</p>' +
                '<p>If it doesn\'t then please ' + 
                '<a href="' + URL_TO_SHARE + '">click here</a></p>.'
            );
        });
    });
};

$(document).ready(function() {
    init();
});
