window.onload = function(){
	const directions  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
	let lis = [...document.querySelectorAll("li")];
	lis.forEach((item)=>{
		item.addEventListener("mouseenter",function(ev){
		directionKey(ev,this,"in");
		},false);
		item.addEventListener("mouseleave",function(ev){
			directionKey(ev,this,"out");
		},false);
	});
	
	let directionKey = (ev,element,state)=>{
		element.className = "";
		let {width,height,top,left} = element.getBoundingClientRect();
		const l = ev.pageX - (left + window.pageXOffset);
		const t = ev.pageY - (top + window.pageYOffset);
		const x = (l - (width/2) * (width > height ? (height/width) : 1));
		const y = (t - (height/2) * (height > width ? (width/height) : 1));
		let res = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
		element.classList.add(`${state}-${directions[res]}`);
	}
}