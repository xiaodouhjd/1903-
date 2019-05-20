
function Car(){}


Car.prototype.addCar = function(goods){
  
  var cartlist = this.getCar();
 
  if(this.hasGoods(goods.id)){
   
    for(var i=0; i<cartlist.length; i++){
      if(cartlist[i].id === goods.id){
        cartlist[i].number += goods.number; 
        break; 
      }
    }
  }else{
    cartlist.push(goods);
  }

  localStorage.setItem('cartlist', JSON.stringify(cartlist) );
}


Car.prototype.hasGoods = function(id){
  var cartlist = this.getCar();
  for(var i=0; i<cartlist.length; i++){
    if(cartlist[i].id === id){
     return true;
    }
  }
  return false;
}


Car.prototype.getCar = function(){
  var cartlist = JSON.parse( localStorage.getItem('cartlist') ) || [];
  return cartlist
}







