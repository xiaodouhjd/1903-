$(function(){
  
	//获取当前商品id值
	var params = location.search.substring(1); //substring(1)去除id前面的问号
	console.log(params)//id=001
  var goodsId = getParam(params, "id");
  
  //获取对应参数的值
	function getParam(params, key) {
		var arr = params.split("&");
		for(var i = 0; i < arr.length; i++) {
			var str = arr[i]; //id=001
			var arr2 = str.split("=");
			if(arr2[0] == key) {
				return arr2[1];
			}
		}
		return "";
  }
  console.log(goodsId)
      var cartlist = []
      var goodsInfo = {}
      var iNumber= 0
      $.getJSON("goods.json",function(data){
         cartlist=data.cartlist;
        console.log(cartlist);
        cartlist.forEach(function(item) {
          if (item.id == goodsId) {
            goodsInfo = item
            $('#goodsName').html(goodsInfo.name) 
      var str=``;
          str=`
          <div class="preview" id="preview">
                  <div class="preview-box">
                      <ul class="box-img">
                          <li class="bigImg selected"><a href="javascript:;"><img src="${goodsInfo.bigImg[0].url}" ></a></li>
                          <li class="bigImg"><a href="javascript:;"><img src="${goodsInfo.bigImg[1].url}" ></a></li>
                          <li class="bigImg"><a href="javascript:;"><img src="${goodsInfo.bigImg[2].url}" ></a></li>
                          <li class="bigImg"><a href="javascript:;"><img src="${goodsInfo.bigImg[3].url}" ></a></li>
                      </ul>
                  </div>
                  <ul class="preview-list">
                      <li class="smallImg"><a href="javascript:;"><img src="${goodsInfo.smallImg[0].url}"></a></li>
                      <li class="smallImg"><a href="javascript:;"><img src="${goodsInfo.smallImg[1].url}"></a></li>
                      <li class="smallImg"><a href="javascript:;"><img src="${goodsInfo.smallImg[2].url}"></a></li>
                      <li class="smallImg"><a href="javascript:;"><img src="${goodsInfo.smallImg[3].url}"></a></li>
                  </ul>
              </div>
         
          <div class="property" id="property">
                  <div class="property-hd">
                      <span id="id">1</span>
                      <h2 class="name">${goodsInfo.name}</h2>
                      <p class="miaoshu ">${goodsInfo.miaoshu}</p>
                  </div>
                  <div class="price">
                      ￥<span >${goodsInfo.price}</span>
                  </div>
                  <div><img src="images/xiangqing.jpg"></div>
                  <div class="property-buy">
                      <div class="num">
                          <h5>数量</h5>
                          <div id="num_box">
                              <span id="reduce">-</span>
                              <input type="text" id="number" value="1" />
                              <span id="add">+</span>
                          </div>
                      </div>
      
         
                  <div class="buy-btn">
                          <a href ="" class="addToCart" >加入购物车</a>
                          <a href="shopping.html"  class="checkCart">查看购物车</a>
                  </div>
                  </div>
              </div>
          ` 
          $(".container").append(str);
          }
        });
        
      })
      console.log(goodsInfo) 

      setTimeout(() => {
      

      //切图
          $(".smallImg").on('click',function(){
            var index = $(this).index();
            $(".bigImg").eq(index).addClass('selected').siblings().removeClass('selected');
          });
      //数量加减
          $(function(){
            $("#add").click(function(){		
              iNumber = parseInt( $('#number').val() )
              iNumber++;
              $("#number").val(iNumber);
            })
            $("#reduce").click(function(){		
              if ($("#number").val()<2) {
                $("#number").val()==1;
              } else{
                iNumber = parseInt($('#number').val())
                iNumber--;
                $("#number").val(iNumber); 
              }		
            })
          })	
          
        
            $('.addToCart').on('click',function(event) {
              layer.msg('添加成功，请到购物车查看',{ 
                shade:0.5,
                time:1000
              });
              event.preventDefault();
              iNumber = parseInt( $('#number').val() )
              var goods = {}
              goods.id = goodsId
              goods.name = goodsInfo.name
              goods.miaoshu = goodsInfo.miaoshu
              goods.price = goodsInfo.price
              goods.imageUrl = goodsInfo.smallImg[0].url
              goods.number = iNumber
              // goods.totalPrice=goods.number*goods.price
              console.log(goods.number)
              // 设置localStorage 存储购物车
              var car=new Car();
              car.addCar(goods);
            })
},0)
});


