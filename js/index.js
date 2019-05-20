$(function(){
    // $(".two-menu").one("mousemove",function(){
    //     $("#nav").css('background-color','rgba(255,255,255,1)');
    //     $(".conceal").slideDown(500);
    // })
    $(".xian").mousemove(function(){
        $("#nav").css('background-color','rgba(255,255,255,0)');
        $(".conceal").css("display","none");
        $(".nav-ul >li> a,.icon-wode,.icon-gwc").css('color','#fff');  
    })

    $(".two-menu").hover(function(){
        //console.log( $(this).parents("li").index() );
        var index = $(this).parents("li").index();
        $(".conceal_b").eq(index).css("display","block").siblings().css("display","none");
        if(index == 8){
            $(".conceal_b").eq( $(".conceal_b").length - 1 ).css("display","block").siblings().css("display","none");
        }
        $("#nav").css('background-color','rgba(255,255,255,1)');
        $(".conceal").slideDown(500);
        $(".icon-wode,.icon-gwc").css('color','#000');
        $(this).css('color','red');
       $(this).parents('li').siblings().children().css('color','#000');
        // var num = $(this).parents('li').index();
        // $(".conceal").html(function(){
        //     // var num = $(this).index();
        //     return "我是"+num;
        // })
    },function(){
        // $("#nav").css('background-color','rgba(255,255,255,0)');
        // $(this).parents('li').parents('ul').slideUp(0);
    })

    $(".conceal").hover(function(){

    },function(){
        // var res = $(".conceal").css("display");
        // console.log(res);
        // if(res == 'block'){
        //     $("#nav").css('background-color','rgba(255,255,255,1)');
        // $(".conceal").slideDown(500);
        // }
        // if(res == 'none'){
           
        // }
        $("#nav").css('background-color','rgba(255,255,255,0)');
        $(".conceal").css("display","none");
       $(".nav-ul >li> a,.icon-wode,.icon-gwc").css('color','#fff');       
        // var res =  $("#banner").mousemove(function(){
        //     console.log("hao1");
        //     return true;
        // })
        // if(res){
           
        // }    
    })

    $(".one-menu").hover(function(){
        $("#nav").css('background-color','rgba(255,255,255,0)');
        $(".conceal").css("display","none");
        // $(".nav-ul >li> a,.icon-wode,.icon-gwc").css('color','#ccc');
        $(this).css('color','red');
        $(this).parents('li').siblings().children().css('color','#fff');
        $(this).parents('li').siblings().css('color','#fff');
    },function(){
        $(this).css('color','#fff');
        // $(this).parents('li').siblings().css('color','#fff');
    })
    $(".icon-wode,.icon-gwc,._form").hover(function(){
        $("#nav").css('background-color','rgba(255,255,255,0)');
        $(".conceal").css("display","none");
        // $(".nav-ul >li> a,.icon-wode,.icon-gwc").css('color','#ccc');
        if($(".conceal").css("display") == 'none'){
            $(".icon-wode,.icon-gwc").css('color','#fff');
        }
        
        $(this).siblings().children().css('color','#fff');
    },function(){
        // $(this).css('color','#fff');
    })

    var _val = $(".text").val();
    if(_val != ''){
        $(".text").css('placeholder','')
    }

//banner轮播
var imglist = $(".olol");

imglist.css({
    width:function(){

        return $(".olol > li > a > img").length * 1349;
    }
})

var index = 0;
var time = setInterval(seti,5000);
function seti(){
    index++;
    index %= $(".olol > li > a > img").length;
    
    animation(imglist,'left',-index*1349,20,function(){
        controlIndex();
    });
}
function controlIndex(){
    if(index >= $(".olol > li > a > img").length-1){
        index = 0;
        imglist.css('left','0px');
    }
    $(".ban_icon > li").eq(index).addClass("biaoji").siblings().removeClass("biaoji");
}

$(".ban_icon > li").on("click",function(){
    clearInterval(time);
    index = $(this).index();
    animation(imglist,'left',-index*1349,20,function(){
        controlIndex();
    });
    time = setInterval(seti,5000);
})

$(".mzsj-max").on("click","div",function(){
    var id = $(this).index();
    location.href = "a.html?id="+id;
})
// function tiaoz(id){
//     location.href = "a.html?id="+id;
// }
//获取参数
var imgarr = [];
$.get("json/good.json",function(data){
    var arrlist = data.imglist;
    console.log(data);
    //获取json中数组
    imgarr = arrlist;
    for(var i=0; i<arrlist.length; i++){
        var OBJS = arrlist[i];
        var _shadow = $("<div class='shadow'></div>").appendTo(".mzsj_top");
        var _shadowBot = $("<div class='shadow'></div>").appendTo(".mzsj_bot");
        $("<img src="+ OBJS.img +" >").appendTo(_shadow);
        $("<h3>"+ OBJS.name +"</h3>").appendTo(_shadow);
        $("<p>"+ OBJS.miaoshu +"</p>").appendTo(_shadow);
        $("<i>"+ OBJS.price +"</i>").appendTo(_shadow);

        $("<img src="+ OBJS.img +" >").appendTo(_shadowBot);
        $("<h3>"+ OBJS.name +"</h3>").appendTo(_shadowBot);
        $("<p>"+ OBJS.miaoshu +"</p>").appendTo(_shadowBot);
        $("<i>"+ OBJS.price +"</i>").appendTo(_shadowBot);
    }

})

$(".mzsj_top").on("click","div",function(){
    var num = $(this).index();
    var obj = imgarr[num];
    var id = obj.id;
    location.href = "./detail.html?id="+id;
    // location.reload();
})

$(".mzsj_bot").on("click","div",function(){
    var num = $(this).index();
    var obj = imgarr[num];
    var id = obj.id;
    location.href = "./detail.html?id="+id;
})

})
