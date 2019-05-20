//创建一个动画方法animation
						//direction - - 方向
						//speed - - 速度
						//destination - - 目的地
						//huidiao - - 回调函数
						function animation(obj,direction,destination,speed,huidiao){
							
							clearInterval(obj.move);
							//获取当前位置
							var getstyle = parseInt(obj.css(direction));
							// var getstyle = parseInt(getStyle(obj,direction));
							var num = Math.abs(destination - getstyle)/1349;
							//获取一个速度speed
							if(destination < getstyle){
								speed = -speed*num;
							}else{
								speed = speed*num;
							}
							
							obj.move = setInterval(function(){
								var oldposition = parseInt(obj.css(direction));
								// var oldposition = parseInt(getStyle(obj,direction));
								var newposition = oldposition + speed;
								if(speed < 0 && newposition <= destination || speed > 0 && newposition >= destination){
									newposition = destination ;
								}
								// obj.style[direction] = newposition + "px";
								obj.css(direction,newposition);
								//当相等时才能回调
								if(newposition == destination){
									
									clearInterval(obj.move);
									huidiao();
								}
								
							},6)
						}
			// 			//创建一个方法来保存当前样式
			// 			function getStyle(obj,name){
							
			// // 				return obj.currentStyle[name];
			// // 				return getComputedStyle(obj,null)[name];
			// 				if(window.getComputedStyle){
			// 				    return getComputedStyle(obj,null)[name];
			// 				}else{
			// 				    return obj.currentStyle[name];
			// 				}
			// 			}