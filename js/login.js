$("#toAccountLogin").on("click",function(){
    $("#from").children().eq(0).addClass("selected").siblings().removeClass("selected");
});
$("#toVCodeLogin").on("click",function(){
    $("#from").children().eq(1).addClass("selected").siblings().removeClass("selected");
    $("#tixin").removeClass("selected");
});
$(".f_l>li").eq(10).on("mouseover",function(){
    $(".language").slideDown();
});

$(".language").hover(function(){
    $(".language").slideDown();
},function(){
    $(".language").slideUp();
})
$(".f_r").children().eq(1).hover(function(){
    $(".ewmgzh").slideDown();
},function(){
    $(".ewmgzh").slideUp();
})
$("#btn").on("click",function(){
    var username=$("#username").val();
    var password=$("#password").val();
    var reg1=/^[1]([3-9])[0-9]{9}$/;
    var reg2=/^[\w_-]{6,16}$/;
        if(!reg1.test(username)){
            $("#tixin").addClass("selected").children().eq(1).html("请输入正确的手机号，手机号不能为空！！！")
        return;
        }else {
            $("#tixin").removeClass("selected");
        }
        if(!reg2.test(password)){
            $("#tixin").addClass("selected").children().eq(1).html("请输入6到16位的密码，可以包含字母数字！")
            return;
        }else{
            $("#tixin").removeClass("selected");
        }
        layer.msg('登陆中!',{ 
            shade:0.5,
            time:1000
          });
        $.ajax({
            "type":"post",
            "url":"./login.php",
            "data":{"username":username,
        "password":password
        },
        "async":"true",
        "dataType":"json",
        "cache":"false",
        "success":function(res){
            if(res[1]===1){
               layer.msg('登陆成功，跳转首页中!',{ 
                  shade:0.5,
                  time:1000
                });
                setTimeout(function(){
                    location.href="./index.html";
                  },1000);
                
             }else{
                layer.msg('登陆失败，账号或密码不正确!',{ 
                    shade:0.5,
                    time:1000
                  });
                }
            }
        });
    
});