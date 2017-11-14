/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function navFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topNav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topNav";
//     }
// }


/* 
  Description: Animates the header upon scroll
  
*/

// $(function(){
//   var header = $("header"),
//       yOffset = 0,
//       triggerPoint = 150;
//   $(window).scroll(function(){
//     yOffset = $(window).scrollTop();
    
//     if(yOffset >= triggerPoint){
//       header.addClass("minimized");
//     }else{
//       header.removeClass("minimized");
//     }
    
//   });
// });

// Sticky navbar

// var headerHeight = 200;

// $(window).bind('scroll', function () {
// if ($(window).scrollTop() > headerHeight) {
//     $('#myNav').removeClass('navbar-top');
//     $('#myNav').addClass('navbar-fixed-top');
// } else {
//     $('#myNav').removeClass('navbar-fixed-top');
//     $('#myNav').addClass('navbar-top');
// }
// }); 

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
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
