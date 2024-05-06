$(document).ready(function(){
	$("a").click(function(e){
		var href = $(this).attr("href");
		if(href == "#none" || href == "#" || href == ""){
			e.preventDefault();
		}
  	});

	$(".lpOpen").on("click",function(){
		var lpID = $(this).attr("data-lp");
		$("#lp_layout").addClass("on");
		$("#lp_layout .lp_wrap."+lpID).addClass("on");
		$("html").css("overflow","hidden");
	});
	$(".lpClose").on("click",function(){
		$("#lp_layout").removeClass("on");
		$("#lp_layout .lp_wrap").removeClass("on");
		$("html").css("overflow","");
	});

});