
var device = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


!function ($, isMobileFunction) {
	$( document ).ready(function() {

	    var thisIsAMobile = $.browser.mobile;
		var android = device.Android();
		var ios = device.iOS();

		if(thisIsAMobile && android)
		{
			$('body').addClass("android");
			console.log( "Android!" );
		} 
		else if (thisIsAMobile && ios) 
		{
			$('body').addClass("iphone");
			console.log( "iphone!" );
		}
	});
}(window.jQuery, 'jquery-ismobile');