new WOW().init();
// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// })

const swiper = new Swiper('.swiper', {
 speed: 400,
 spaceBetween:100,
  pagination: {
    el: '.projects-pagination',
    bulletClass : 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
 
})

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
// //   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });