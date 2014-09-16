function slideSwitch(){
	var $active = $('#slideshow img.active');
	var $next = $active.next();
	$active.addClass('lastactive');
	$next.css({opacity:0.0})
		.addClass('active')
		.animate({opacity:1.0},1000,function(){
			$active.removeClass('active lastactive');
		})
}
$(document).ready(function(){
	setInterval("slideSwitch()",5000);
})