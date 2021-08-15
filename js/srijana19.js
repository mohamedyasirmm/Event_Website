$(document).ready(function(){
	var scrollLink = $('.scroll');
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop: $(this.hash).offset().top},1000);
	});
	$(window).scroll(function() {
		var scrollBarLocation = $(this).scrollTop();
		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top - 50;
		
			if(sectionOffset<=scrollBarLocation){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});
	$('.navbar-collapse ul li a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});
});