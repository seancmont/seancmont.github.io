/* 
  Description: Animates the header upon scroll
  
*/

$(function(){
  var header = $("header"),
      yOffset = 0,
      triggerPoint = 150;
  $(window).scroll(function(){
    yOffset = $(window).scrollTop();
    
    if(yOffset >= triggerPoint){
      header.addClass("minimized");
    }else{
      header.removeClass("minimized");
    }
    
  });
});

// Sticky navbar

var headerHeight = 200;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#myNav').removeClass('navbar-top');
    $('#myNav').addClass('navbar-fixed-top');
} else {
    $('#myNav').removeClass('navbar-fixed-top');
    $('#myNav').addClass('navbar-top');
}
}); 

// $(document).ready(function() {
// 		var s = $("#sticker");
// 		var pos = s.position();					   
// 		$(window).scroll(function() {
// 			var windowpos = $(window).scrollTop();
			
// 			if (windowpos >= pos.top) {
// 				s.addClass("stick");
// 			} else {
// 				s.removeClass("stick");	
// 			}
// 		});
// 	});
