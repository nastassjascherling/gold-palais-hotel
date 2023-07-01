/* Changes on page scroll */

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("fixedBtn").classList.add("btnShow");
  } 
  else if (document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("navScrollChange");
    document.getElementById("fixedBtn").classList.remove("btnShow");
  } 
  else {
    document.getElementById("nav").classList.remove("navScrollChange");
    document.getElementById("fixedBtn").classList.remove("btnShow");
  }
}

/* Swiper */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1100: {
      slidesPerView: 1.5,
      spaceBetween: 70,
      centeredSlides: true,
    },
  },
});

var swiper = new Swiper(".mySwiperV2", {
  slidesPerView: 1,
  spaceBetween: 125,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-nextV2",
    prevEl: ".swiper-button-prevV2",
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    1000: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    1430: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    1600: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
  },

});

var swiper = new Swiper(".mySwiperV3", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-nextV3",
    prevEl: ".swiper-button-prevV3",
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    
    1000: {
      slidesPerView: 3,
    },
  },
});


/* Swiper ersten Link ansprechen*/

let boxLink = document.querySelectorAll('.sliderHorizontal__card');

for (var i = 0, l = boxLink.length; i < l; i++) {
  let boxLink2 = boxLink[i];
  
  boxLink2.addEventListener('click', function (ev) {

    let link = boxLink2.querySelector('a');
    if (link && link != ev.target) {

      link.click();
    }
  });
}

let boxLinkV2 = document.querySelectorAll('.txtSlider__slider__card');

for (var i = 0, l = boxLinkV2.length; i < l; i++) {
  let boxLink2 = boxLinkV2[i];
  
  boxLink2.addEventListener('click', function (ev) {

    let link = boxLink2.querySelector('a');
    if (link && link != ev.target) {

      link.click();
    }
  });
}