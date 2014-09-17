$(document).ready(function(){
	$("div.overlay-show").hover(
		function(){
			$(this).find("div.overlay").slideToggle("fast");
		})
})