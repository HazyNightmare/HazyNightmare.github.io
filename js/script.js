var PAGECONTROLLER=(function(e,d,b){var c={};c.init=function(){a();f()};c.randomBackground=function(){a()};return c;function a(){var k=null,j=[],i=null,g=null,h=null;k=e(".header");j=["rainy-floor","seattle","space-jupiter","office","laptop-notepad"];i=0;g=j.length;h=Math.floor(Math.random()*(g-i))+i;k.css("background","url(imgs/"+j[h]+".jpg)");k.css("background-repeat","no-repeat");k.css("background-position","center");k.css("background-attachment","scroll");k.css("background-size","cover")}function f(){var g=null;e("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){g=e(this.hash);g=g.length?g:e("[name="+this.hash.slice(1)+"]");if(g.length){e("html,body").animate({scrollTop:g.offset().top},1000);return false}}})}}(window.jQuery,window,document));PAGECONTROLLER.init();