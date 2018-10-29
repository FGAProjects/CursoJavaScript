$(function(){
	/*
	$('img').width($(window).width()).height($(window).height());
	$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());
	});

	$(window).scroll(function(){

		$('img').fadeOut('1000');
	});
	*/

	$('body')
		.css("height","5000px");
	$(window).scroll(function(){

		var topo = $(window).scrollTop();
		if(topo > 400) {
			$('img').fadeOut('1000');
		} else {
			$('img').fadeIn('1000');
		}
	});
});