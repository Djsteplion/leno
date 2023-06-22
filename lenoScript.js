

/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("sidenav").style.width="100%";
}

function closeNav(){
    document.getElementById("sidenav").style.width="0";
}

/** End Of script for menu */

// script for testimonials


//Card Slider - Swiper 

var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});


   // End Of Script For Testimnials (( card slider ))


   //Beginning of Script For The ".Latch" Hover Effect...


   const latch1 = document.getElementById("latch1").innerHTML;
   const latch2 = document.getElementById("latch2").innerHTML;
   const latch3 = document.getElementById("latch3").innerHTML;


 
   const latchA = document.querySelector(".latch1");
   const latchB = document.querySelector(".latch2");
   const latchC = document.querySelector(".latch3");


   latchB.addEventListener("click", function() {
	  latch1.style.borderBottom = "4px solid white;"
	  latch3.style.borderBottom = "4px solid white;"

   } );



   
   function color1(){
	document.getElementById('latch1').style.color = '#00C9DB';
	document.getElementById('latch1').style.borderBottomColor = '#00C9DB';

	document.getElementById('latch2').style.color = 'white';
	document.getElementById('latch2').style.borderBottomColor = 'white';
   
	document.getElementById('latch3').style.color = 'white';
	document.getElementById('latch3').style.borderBottomColor = 'white';

	document.getElementById('tracking').style.display = 'none';
	document.getElementById('monitoring').style.display = 'none';
	document.getElementById('configuring').style.display = 'block';

	document.getElementById('latch1').style.transition = '0.3s';
	document.getElementById('configuring').style.transition = '0.9s';
}

   function color2(){
	   document.getElementById('latch1').style.color = 'white';
	   document.getElementById('latch1').style.borderBottomColor = 'white';

	   document.getElementById('latch2').style.color = '#00C9DB';
	   document.getElementById('latch2').style.borderBottomColor = '#00C9DB';

	   document.getElementById('latch3').style.color = 'white';
	   document.getElementById('latch3').style.borderBottomColor = 'white';

	   document.getElementById('tracking').style.display = 'block';
	   document.getElementById('tracking').style.display = 'flex';
	   document.getElementById('configuring').style.display = 'none';
	   document.getElementById('monitoring').style.display = 'none';

	   document.getElementById('latch1').style.transition = '0.3s';
	   document.getElementById('tracking').style.transition = '0.9s';
	
      
   }


   function color3(){
	document.getElementById('latch1').style.color = 'white';
	document.getElementById('latch1').style.borderBottomColor = 'white';

	document.getElementById('latch3').style.color = '#00C9DB';
	document.getElementById('latch3').style.borderBottomColor = '#00C9DB';

	document.getElementById('latch2').style.color = 'white';
	document.getElementById('latch2').style.borderBottomColor = 'white';

	
	document.getElementById('monitoring').style.display = 'block';
	document.getElementById('monitoring').style.display = 'flex';
	document.getElementById('tracking').style.display = 'none';
	document.getElementById('configuring').style.display = 'none';

	document.getElementById('latch1').style.transition = '0.3s';
	document.getElementById('monitoring').style.transition = '  0.9s';
	
 
   
}



/** screenshots **/
/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 30,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 516px
		516: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	}
});