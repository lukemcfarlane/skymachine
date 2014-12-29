var OBJECT_TO_LIKE = 'http://lukemcfarlane.github.io/skymachine/';
var FB_APP_ID = '315954451937355';

function share() {
    FB.ui({
        method: 'share',
        href: OBJECT_TO_LIKE,
        redirect_uri: 'download.html'
    }, function(response){});
}

function enableDownload() {
    $('.download-link').show();
    $('.share-link').hide();
}

function init() {
    $('.share-link').click(function() {
        share();
    });
}

$(document).ready(function() {
    init();
});

/*****************************************************
 * INIT THE FACEBOOK SDK
 *****************************************************/
window.fbAsyncInit = function() {
    FB.init({
      appId      : FB_APP_ID,
      status     : true,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.0'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/******************************************************/

