$(function () {

	var btnUp = $('.button_up');

	function scrollBtn(){
		var top = $(this).scrollTop();
		if(top > 300){
			btnUp.fadeIn(1000);
		}
		else {
			btnUp.fadeOut(1000);
		}
	}
	$(document).on('scroll', scrollBtn);
		btnUp.on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})
});