var navItem1 = document.querySelector(".nav-item1");
var jNav = document.querySelector(".j-nav");
navItem1.addEventListener("mousemove",()=>{
	jNav.style.display="block";	
	});
navItem1.addEventListener("mouseleave",()=>{
	jNav.style.display="none";	
	});