$(document).ready(function() {

	$(".lightbox-link").on("click", function(e){
		e.preventDefault();
		$("#text-box").text($(this).attr("monkey"));
		$("#chosen-image").attr("src", $(this). attr("src"));
		$(".outer-lightbox").show();
			$(".outer-lightbox").on("click", function(){
				$(".outer-lightbox").hide();
		});
	});
});