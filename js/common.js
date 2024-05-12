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

const modelSelect = function(id){
    $("#dataSetBtn").prop("disabled",false);
    $("#next").prop("disabled",false);
}

const modelStrengthen = {
    step : function(num){
        if(num == 1){
            $("#question").val() != "" ? modelStrengthen.mov(1) : '';
        }else if(num == 2){
            if($("input[name=starChk]:checked").length > 0 && $("input[name=synthesizeChk]:checked").length > 0){
                modelStrengthen.mov(2);
            }
        }else if(num == 3){
            $("#btnPass").prop("disabled",true);
            $("#btnModelStrengthen").prop("disabled",false);
            $("#btnTemplate").prop("disabled",false);
            $("#next").prop("disabled",false);
            modelStrengthen.mov(3);
        }
    },
    mov : function(num){
        $("#modelStrengthenStep").removeClass("step1");
        $("#modelStrengthenStep").removeClass("step2");
        $("#modelStrengthenStep").removeClass("step3");
        $("#modelStrengthenStep").addClass("step"+num);
    },
    del : function(num){
        $("#modelStrengthenStep").removeClass("step1");
        $("#modelStrengthenStep").removeClass("step2");
        $("#modelStrengthenStep").removeClass("step3");
        if(num == 1){
            $("#question").val("");
        }else if(num == 2){
            $("#modelStrengthenStep").addClass("step1");
        }else if(num == 3){
            $("#modelStrengthenStep").addClass("step2");
        }
    },
    next : function(id){
        $("#lp_layout2").css("display","flex");
        $("#lp_layout2 .lp_wrap."+id).css("display","flex");
        $("html,body").animate({"scrollTop":0},500);
        setTimeout(function(){
            $("#lp_layout2").removeAttr("style");
            $("#lp_layout2 .lp_wrap."+id).removeAttr("style");
        },2000);
    }
}