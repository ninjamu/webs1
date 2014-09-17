$(document).ready(function(){
	$("div.thumb").hover(
		function(){
			$(this).find("div.overlay").fadeToggle("fast");
		})
})