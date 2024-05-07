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

const myService = {
    lp : function(){
        const _lpID = "lpMyService";
        const _val = $("#myService").val();
        if(_val != 0){
            const _option = $("#myService option:selected").text();
            $("#lp_layout").addClass("on");
            $("#lp_layout .lp_wrap."+_lpID).addClass("on");
            $("html").css("overflow","hidden");
            $("#lp_layout .lp_wrap."+_lpID+" .service p").text(_option);
        }else{
            $(document).find(".errorShow[data-txtError=myService]").show();
        }
        myService.select();
    },
    select : function(){
        const _val = $("#myService").val();
        if(_val != 0){
            $(document).find(".errorShow[data-txtError=myService]").hide();
            $("#myService").css({"color":"#161616"});
        }else{
            $("#myService").removeAttr("style");
        }
    }
}

const serviceMake = {
    lp : function(){
        const _val = $("#datasetMake").val();
        if(_val != 0){
        }else{
            $(document).find(".errorShow[data-txtError=datasetMake]").show();
        }
        myService.select();
    },
    select : function(){
        const _val = $("#datasetMake").val();
        if(_val != 0){
            $(document).find(".errorShow[data-txtError=datasetMake]").hide();
            $("#myService").css({"color":"#161616"});
        }else{
            $("#myService").removeAttr("style");
        }
    }
}

const datasetSelect = function(select){
    const _this = $(select);
    const _val = _this.val();
    $(document).find(".list-card").hide();
    $(document).find(".list-card[data-dataset="+_val+"]").show();
}
