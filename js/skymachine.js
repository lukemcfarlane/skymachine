// var Skymachine = function(urlToShare, fbAppId, downloadUrl) {
var Skymachine = function(options) {
    for(opt in options) {
        switch(opt) {
            case 'urlToShare':
                this.urlToShare = options[opt];
                break;
            case 'fbAppId':
                this.fbAppId = options[opt];
                break;
            case 'downloadUrl':
                this.downloadUrl = options[opt];
                break;
            default:
                throw new Error('Unsupported option: \'' + opt + '\'');
        }
    }

    this.initFacebook();
};

Skymachine.prototype.initFacebook = function() {
    var appId = this.fbAppId;
    window.fbAsyncInit = function() {
        FB.init({
            appId      : appId,
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
};

/**
 * This function is not currently being used, as it requires the publish_actions
 * permission to be approved for our Facebook app.
 */
Skymachine.prototype.login = function(callbackFn) {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', function(response) {
                callbackFn('Good to see you, ' + response.name + '.');
            });
        } else {
            callbackFn('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_actions',
        return_scopes: true
    });
};

/**
 * Show a Facebook share dialog and call the callback function on
 * complete. 
 *
 * Note: The response currently does not tell us whether or not the
 *       user actually completed the share successfully. That is,
 *       they could just click cancel or close the dialog and we will
 *       get the same response.
 *
 *       To determine success would require the user to have logged 
 *       in using the login function, as well as have the publish_actions 
 *       permission approved for our app on Facebook.
 */
Skymachine.prototype.share = function(callbackFn) {
    FB.ui({
        method: 'share',
        href: this.urlToShare 
    }, function(response){
        callbackFn(response);
    });
};

/**
 * Automatically start the file download.
 * 
 * Note: The file should be a zip file for it to actually download,
 *       otherwise some browsers will just open the mp3 file in the
 *       browser itself.
 */
Skymachine.prototype.startDownload = function() {
    var url = this.downloadUrl;
    setTimeout(function() {
        window.location.href = url;
    }, 1 * 1000); // Start downloading automatically in 1 second
};