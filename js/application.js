function init() {
    window.Skymachine = new Skymachine({
        urlToShare: 'http://lukemcfarlane.github.io/skymachine/',
        fbAppId: '315954451937355',
        downloadUrl: '/files/Getaway.zip'
    });

    $('#share-link').click(function() {
        Skymachine.share(function() {
            Skymachine.startDownload();

        });
    });
};

$(document).ready(function() {
    init();
});
