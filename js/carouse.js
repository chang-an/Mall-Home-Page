$(function(){
	var loopimages = $(".loopimages");
	var prev = $(".loop-prev");
	var next = $(".loop-next");
	var loopImgs = $(".loop-img");
	var index = 0; //下标
	var length = loopimages.length;
	var timer = null;
	init();
	function init(){
		loopimages.eq(0).fadeIn("fast").siblings().fadeOut("fast");
	}
	next.click(function(){
		index++;
		index%=length;
		play();
	});
	prev.click(function(){
		index--;
		index = index<0 ? length-1:index;
		play();
	});
	function play(){
		loopimages.eq(index).fadeIn(5).siblings().fadeOut(5);
		loopImgs.eq(index).addClass('loop-color').siblings().removeClass('loop-color');
	}
	loopImgs.click(function(){
		index = this.innerHTML-1;
		play();
		
	});
	timer = setInterval(autoPlay,3000);
	function autoPlay () {
		
		index++;
		index%=length;
		play();
	  
	}
	autoPlay();
  
  $(".slider ul li").on('mouseover',function () {
	         clearInterval(timer); 
	    })

  $(".slider ul li").on('mouseout',function () {
        clearInterval(timer); 
        timer = setInterval(autoPlay,3000); 
    })
})