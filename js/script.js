$(document).ready(function(){

	$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
       $('header').addClass('menuFixed');
    }
    else {
       $('header').removeClass('menuFixed');
    }
	});

	// $('.work img').hover(function(){
	// 	$(this).addClass('workTrans');
	// });

	$('.work').hover(function(){	
    	$(this).addClass('workTrans');
 		}, function(){
   		$(this).removeClass('workTrans');
  	});

});