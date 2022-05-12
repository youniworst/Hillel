'use strict';

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

swiper.navigation.init()
console.log(swiper);
