define(["jquery"],function(require){
    return commonObj = {
        ajaxstatus:true,
        pagesize : 5,
        winH: $(window).height(),
        loadCanvas:function(){
         var imglength = $(".product").find("canvas").length;
            if (imglength > 0) {
                $(".product").find("canvas").each(function () {
                    var imgSrc = $(this).data("src");
                    var imageObj = new Image();
                    imageObj.canvs = $(this)[0];
                    var cvs = imageObj.canvs.getContext('2d');
                    if (cvs) {
                        imageObj.onload = function () {
                            imageObj.canvs.width = this.width;
                            imageObj.canvs.height = this.height;
                            cvs.drawImage(this, 0, 0);
                            $(imageObj.canvs).css("background-image", "none");
                        }
                        imageObj.src = imgSrc;
                    }
                })
            }
        },
        getData: function (pagenumber) {
            $.ajax({
                type: "get",
                url: "dist/test.json",
                data: {
                    page:commonObj.pagenumber,
                    row:  commonObj.pagesize, 
                },
                dataType: "json",
                success: function (result) {
                    $(".loaddiv").hide();
                    if (result.length > 0) {
                         commonObj.ajaxstatus=true;
                        commonObj.insertDiv(result);
                        commonObj.loadCanvas();
                    }else {
                        $("#pagenumlength").val("0");
                        // alert('暂无数据');
                    }
                },
                beforeSend: function () {
                    //console.dir(323);
                    $(".loaddiv").show();
                },
                error: function () {
                    $(".loaddiv").hide();
                }
            });
 
        },
        insertDiv: function (json) {
            var $mainDiv = $("#scrollAdd");
            var html = '';
           var  showlength=5;
            if(json.length<5){
                showlength=json.length;
            }

            for (var i = 0; i < showlength; i++) {              
                html += '<li><a href="#">'+
                    '<div class="triangle-topleft"></div>'+
                    '<span class="shuxing" data_url="productinfo.html">专属</span>'+
                    '<div class="leftimages fl"><canvas data-src="images/product/product1.png" ></canvas></div>'+
                     '<div class="productcontent fr">'+
                         '<p class="ptitle pl10">广联达变更算量</p>'+
                          '<p class="pdes pl10">简介这里简介这里简介这里简介这里简介这里简介这里简介这里简介介这里简介</p>'+
                          '<p class="pprice pl10">价格：<span class="green">￥5000</span></p>'+
                    '</div></a></li>';
            }
            $mainDiv.append(html);
        },
        scrollHandler: function () {
            var pageH = $(document).height()
            var scrollT = $(window).scrollTop(); //滚动条top   
             var winheight=$(window).height();
           if (parseInt(scrollT)+parseInt(winheight)+50>=parseInt(pageH) && commonObj.ajaxstatus) {
                if($("#pagenumlength").val()=="1"){
               commonObj.ajaxstatus=false;
               commonObj.currentpage++;
                commonObj.getData(commonObj.currentpage)
            }else{
                return
            }
            }
        },


        addnums:function(){
            var number=parseInt($(this).prev().val());//取得输入框的值
            if(!isNaN(number)){
                    if(number<1){
                    number=1;
                }else{
                    number+=1;
                }
            }else{
                number=1;
            }
            $(this).prev().val(number);

        },
        reducenums:function(){
            var number=parseInt($(this).next().val());
            // console.log(number);
            if(!isNaN(number)){
                if(number<1){
                    number=1;
                }else{
                    number-=1;
                }               
            }else{
                number=1;
            }
            $(this).next().val(number);
        },
        addcatAnimate:function(){
            // console.log(1);
            //先获取input的值
            var numbercount=Number($("#cartnumbers").val());
            var productimg=$("#productimg"),
                x=productimg.offset().left+30,
                y=productimg.offset().top-10,
                imgsrc=productimg.children("img").attr("src"),//这是动画的图片
                nav2L=$(".nav2").offset().left,
                nav2T=$(".nav2").offset().top;
                // console.log(nav2L,nav2T);
                /*如果没有动画，就创建一个div动画*/
               if ($('#flydiv').length <= 0) {
                    $('body').append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50" /></div');
                };
                var obj=$("#flydiv");
                obj.css({"left":x,"top":y}).animate({"left":nav2L,"top":nav2T-80},500,function(){
                    obj.stop(false,false).animate({"left":nav2L,"top":nav2T-20,"opacity":0},500,function(){
                      obj.fadeOut(300,function(){
                           obj.remove();
                           var number=Number($(".cartnums").text());
                          $(".cartnums").text(number+numbercount);
                          $(".cartnums").show();

                      });
                    });

                });
        }














        // addnums:function(){
        //     var number=parseInt($(this).prev().val());
        //     if(!isNaN(number)){
        //         if(number<1){
        //             number=1;
        //         }else{
        //           number+=1; 
        //         }
        //     }else{
        //         number=1

        //     }
        //    $(this).prev().val(number);
        // },
        // reducenums:function(){
        //     var number=parseInt($(this).next().val());
        //     if(!isNaN(number)){
        //         if(number<2){
        //             number=1;
        //         }else{
        //             number-=1;
        //         }
        //     }else{
        //         number=1
        //     }
        //     $(this).next().val(number);
        // },
        // addcatAnimate:function(e){
        //     e.stopPropagation();
        //     var number=Number($("#cartnumbers").val());
        //     var productimg=$("#productimg"),
        //        imgsrc=$("#productimg").children("img").attr("src"),
        //         x = productimg.offset().left + 30,
        //         y = productimg.offset().top -10,
        //         X = $(".nav2").offset().left,
        //         Y = $(".nav2").offset().top;
        //         if ($('#flydiv').length <= 0) {
        //             $('body').append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50" /></div');
        //         };
        //         var $obj=$('#flydiv');
        //         if(!$obj.is(':animated')){
        //             $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
        //                 $obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
        //                     $obj.fadeOut(300,function(){
        //                         $obj.remove();  
        //                         var num=Number($(".cartnums").text());
        //                         $(".cartnums").text(num+number);
        //                         $(".cartnums").show();
        //                     });
        //                 });
        //             }); 
        //         };

        // }

    }
})