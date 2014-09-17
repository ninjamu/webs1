$(document).ready(function(){
	$("div.blogcontent").hover(
		function(){
			$(this).find("div.content-hide").slideToggle("fast");
		})
})