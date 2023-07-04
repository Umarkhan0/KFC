
let openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("LeftBtn").innerHTML=""
}
let closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("LeftBtn").innerHTML =
  ` <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
</button> `;
}



  
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
    },
      750: {
          slidesPerView: 2,
      },
      // 628:{
      //   slidesPerView: 3,
      // },
      740:{
        slidesPerView: 2,
      },
      950: {
          slidesPerView:3,
      },
  },
});