
define(function (){
		var bg=function(){
			$().css("background","red");
		}
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add,
			bg:bg
　　　　};
　　});