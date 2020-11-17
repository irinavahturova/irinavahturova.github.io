

$(function () {
	$(window).scroll(function() {
	    $(' .section_title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("flip");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.plus').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});
});