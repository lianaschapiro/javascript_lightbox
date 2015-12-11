$(document).ready(function() {

	$(".lightbox-link").on("click", function(){
		$(".outer-lightbox").show();
	});

	$(".outer-lightbox").on("click", function(){
		$(".outer-lightbox").hide();
	});

});