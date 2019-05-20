document.getElementById('btn').onclick = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var reg1=/^[a-zA-Z][\w]{3,15}$/;
    if(!reg1.test(username)){
        document.getElementById('t1').innerHTML="请输入4到16位登录名，可以包含字母数字下划线";
        return;
    }
    else{
        document.getElementById('t1').innerHTML=""  
    }
    if(!reg1.test(password)){
        document.getElementById('t2').innerHTML="请输入4到16位的密码，可以包含字母数字下划线";
        return;
    }
    else{
        document.getElementById('t2').innerHTML="";
    }  
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data=JSON.parse(xhr.responseText)
            if(data.username==username && data.password==password){
                alert("登录成功")
            }
            else{
                alert("请输入正确的账号密码")
            }
        }
        xhr.open('get',"user.json"); 
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(null);
    }   
}










      
        