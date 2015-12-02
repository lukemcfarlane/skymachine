/**
 * Helper class to handle logging in/sharing a URL
 * via Facebook, and starting an automatic download
 * of a file.
 *
 * Usage:
 *  var Skymachine = new Skymachine({
 *      urlToShare: 'http://www.example.com',
 *      fbAppId: 'XXXXXXXXXXXXXXX',
 *      downloadUrl: '/files/myFile.zip'
 *  });
 *
 * @author  http://github.com/lukemcfarlane/
 * @date    Jan 2015
 */
var Skymachine = function(options) {
    for(opt in options) {
        switch(opt) {
            case 'youtubeCode':
                this.youtubeCode = options[opt];
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
        xfbml      : true,
        version    : 'v2.2'
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
        var success = !!response.authResponse;
        callbackFn(success);
    }, {
        scope: 'publish_actions',
        return_scopes: true
    });
};

/**
 * Show a Facebook share dialog that calls a callback function
 * with boolean value indicating whether or not the user shared
 * successfully.
 */
Skymachine.prototype.share = function(callbackFn) {
    FB.ui({
        method: 'share',
        href: 'http://www.youtube.com/watch?v='+this.youtubeCode
    }, function(response){
        var userDidShare = response && !response.error_code;
        callbackFn(userDidShare);
    });
};

/**
* Show a Facebook feed dialog that calls a callback function
* with boolean value indicating whether or not the user posted
* successfully.
*/
Skymachine.prototype.feed = function(callbackFn) {
  FB.ui({
      method: 'feed',
      source: 'http://www.youtube.com/v/'+this.youtubeCode,
      picture: 'http://img.youtube.com/vi/'+this.youtubeCode+'/default.jpg',
      link: 'http://www.youtube.com/watch?v='+this.youtubeCode
  }, function(response){
      var userDidShare = response && !response.error_code;
      callbackFn(userDidShare);
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
