//当网页中的所有DOM元素加载完成之后触发
//$(document).ready(function  () {
//	
//});
//或者
$(function  () {
	//预加载图片
	//预加载图片
	var loadingImgs = ["img/activity_rule.png", "img/bg.jpg", 
	"img/bg2.png", "img/close.png", 
	"img/p1_btns_wrap.png", 
	"img/p1_first.png", "img/p1_from.png", 
	"img/p1_second.png", "img/p1_sub.png", 
	"img/p1_third.png", "img/p2_kuang.png", 
	"img/p2_qian.jpg", "img/p2_scoring.png", 
	"img/p2_shou.png", "img/p2_txt1.png", 
	"img/p2_txt2.png", "img/p2_txt3.png", 
	"img/p2_zhuan.png", "img/p3_acquire.png", 
	"img/p3_again.png", "img/p3_bg.jpg", 
	"img/p3_share.png", "img/p3_share_btn.png",
	"img/prize.png", "img/qian.png", 
	"img/ranking.png", "img/ranking_bg.png",
	"img/shiyong.png", "img/shizhong.png", 
	"img/shou.png", "img/start_game.png", 
	"img/tiaozhan.png", "img/yingqu.png"];
	var loadCount = 0;//记录加载成功的图片张数
//	依次创建img对象,完成图片的加载
    for (var i = 0;i < loadingImgs.length;i++) {
    	  //创建对象
    	  var img = new Image();
    	  //设置路径
    	  img.src = loadingImgs[i];
    	  //图片加载成功
    	  img.onload = function  () {
    	  	loadCount++;
    	  	//计算百分比
    	  	var percent = Math.floor(loadCount / loadingImgs.length * 100) + '%';
    	  	  $('#loading').html(percent);   
    	  	if (loadCount == loadingImgs.length) {
    	  		//说明加载图片成功
    	  		//隐藏加载页面
    	  		$('#loadingwrap').hide();
    	  		//显示第一个界面
    	  		$('#page1').show();
    	  	}
    	  }
    }
});
