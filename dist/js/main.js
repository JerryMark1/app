require.config({
	// baseUrl:
	paths:{
		"jquery":"../../lib/jquery-1.11.3.min",
		"swiper":"../../lib/swiper.min",
		"load":"./load"
	}
})

//依赖模块
require(['jquery',"swiper","load"],function($,swiper,load) {
 var swipcont=new Swiper('#swip-cont', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: true
    });
 	load.loadCanvas();
 	$(window).scroll(load.scrollHandler);
        $("#productul").on("touchmove", load.scrollHandler);
        $(".add").on("click",load.addnums);
        $(".reduce").on("click",load.reducenums);
        $(".addcart").on("click",load.addcatAnimate);
        if($(".cartnums").val()<1){
            $(".cartnums").hide();
        }else{
           $(".cartnums").show();
        }

        $(".delbtn").on("click",function(){
            $(this).parents("li").remove();
            if($(".cartlist").children("li").length<1){
                $(".cartlist").hide();
                $(".onthebottom").hide();
                $(".null_shopping").show();
            }
        })
        $(".clearcart").on("click",function(){
            $(".cartlist").find("li").each(function(){
                $(this).remove();
            })
            $(".cartlist").hide();
            $(".onthebottom").hide();
            $(".null_shopping").show();
        })
})