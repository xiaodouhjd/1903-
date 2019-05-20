$("#verify_1").on("click",function(){
    var sjs=Math.floor(Math.random()*900000+100000);
    $("#verify_1").children().html(sjs);
});
window.onload=function(){
    var sjs=Math.floor(Math.random()*900000+100000);
    $("#verify_1").children().html(sjs);
}
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
    var q_password=$("#q_password").val();
    var yzm=$("#verify").val();

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
        if(!(password===q_password)){
            console.log(q_password);
            $("#tixin").addClass("selected").children().eq(1).html("两次密码不一样,请重新输入!")
            return;
        }else {
            $("#tixin").removeClass("selected");
        }
        if(!(yzm===$("#verify_1").children().html())){
            $("#tixin").addClass("selected").children().eq(1).html("验证码不正确!!");
            return;
        }else {
            $("#tixin").removeClass("selected");
        }
        layer.msg('玩命加载中!',{ 
            shade:0.5,
            time:1000
          });
          
        $.ajax({
            "type":"post",
            "url":"./register.php",
            "data":{"username":username,
                    "password":password
                    },
             "async":"true",
            "dataType":"json",
            "cache":"false",
            "success":function(res){
                if(res===2){
                    $("#tixin").addClass("selected").children().eq(1).html("该手机已注册!!");
                    return;
                }else if(res===1){
                    layer.msg('注册成功！正在跳转登录页面!!',{ 
                        shade:0.5,
                        time:2000
                      });
                      setTimeout(function(){
                        location.href="./login.html";
                      },2000);
                      
                }else {
                    layer.msg('注册失败，请刷新网页',{ 
                        shade:0.5,
                        time:1000
                      });
                }
            }
        });
        
    });