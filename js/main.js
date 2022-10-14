$(".content-tabs").tabs({ 
	show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" } ,
	hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } 
  });


const today = new Date().getDay();


let activatedDayOfWeek = function(){

	if(today == 0) {
		$(".content-tabs").tabs({ active: 6 });
	}else if(today == 1) {
		$(".content-tabs").tabs({ active: 0 });
	}else if(today == 2) {
		$(".content-tabs").tabs({ active: 1 });
	}else if(today == 3) {
		$(".content-tabs").tabs({ active: 2 });
	}else if(today == 4) {
		$(".content-tabs").tabs({ active: 3 });
	}else if(today == 5) {
		$(".content-tabs").tabs({ active: 4 });
	}else if(today == 6) {
		$(".content-tabs").tabs({ active: 5 });
	}else {
		alert("Həftənin belə bir günü yoxdur!")
	}
}

activatedDayOfWeek();


