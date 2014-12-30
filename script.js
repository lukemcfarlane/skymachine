var OBJECT_TO_LIKE = 'http://lukemcfarlane.github.io/skymachine/';
var FB_APP_ID = '315954451937355';

function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
            share();
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_actions',
        return_scopes: true
    });
}

function share() {
    FB.ui({
        method: 'share',
        href: OBJECT_TO_LIKE
    }, function(response){
        debugger
    });
}

function enableDownload() {
    $('.download-link').show();
    $('.share-link').hide();
}

function init() {
    $('.share-link').click(function() {
        login();
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

