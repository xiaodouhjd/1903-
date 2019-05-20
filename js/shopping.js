$(".status").hover(function(){
    $(".status>li").slideDown();
},function(){
    $(".status>li").slideUp();
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

$(function(){
    var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
    if(cartlist==""){
        $("#content").css("display","block");
        $("#content_2").css("display","none");
        return;
    }else{
        $("#content").css("display","none");
        $("#content_2").css("display","block");
    }
    var str=``;
    var shuzu=0;
    for(var i=0;i<cartlist.length;i++){
        str+=` <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;${i+1}</td>
        <td> <a href="#" class="img_1"><img src="${cartlist[i].imageUrl}" alt=""><div class="img_sz"><h3>${cartlist[i].name}</h3><p>${cartlist[i].miaoshu}</p></div></a></td>
        <td >¥ <span class="jia">${cartlist[i].price}</span></td>
        <td><button class="btn_1" onclick="reduce(${cartlist[i].id})"> - </button><input type="text" class="geshu" value="${cartlist[i].number}" disabled="disabled"><button class="btn_2" onclick="add(${cartlist[i].id})"> + </button></td>
        <td>¥ <span id="zj${i}">100</span></td>
        <td><button class="btn btn-warning" onclick="delCar(${cartlist[i].id})">删除</button></td>
    </tr>`
     shuzu+=cartlist[i].price*cartlist[i].number;
     $(".shuzi").html(shuzu);
    }

   
    $(".table").append(str);
    for(var i=0;i<cartlist.length;i++){
        $("#zj"+i).html(cartlist[i].price*cartlist[i].number);
    }
   
});
function delCar(id){
    var cartlist=getStorage(id)
    if(!confirm('确认删除?')){
        return;
      }
        for(var i=0; i<cartlist.length; i++){
            if(cartlist[i].id == id){
              cartlist.splice(i,1);
              break;
            }
        }
        localStorage.setItem('cartlist',JSON.stringify(cartlist));
      location.reload();
    }
function reduce(id){
    var cartlist=getStorage(id);
    for(var i=0;i<cartlist.length;i++){
        if(cartlist[i].id==id){
            var num=cartlist[i].number;
            num--;
            if(num<=0){
                cartlist.splice(i,1); 
                break;
            }
            cartlist[i].number=num;
            
            break;
        }
    }
    localStorage.setItem('cartlist',JSON.stringify(cartlist));
    location.reload();
}

add=(id)=>{
    var cartlist=getStorage(id);
    for(var i=0;i<cartlist.length;i++){
        if(cartlist[i].id==id){
        var num=cartlist[i].number;
        num++;
        cartlist[i].number=num;
        break;
        }
    }
    localStorage.setItem('cartlist',JSON.stringify(cartlist));
    location.reload();
}


var getStorage=(id)=>{
    var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
    return cartlist;
}
var del=(id)=>{
    for(var i=0; i<cartlist.length; i++){
        if(cartlist[i].id == id){
          cartlist.splice(i,1);
          break;
        }
    }
}
   