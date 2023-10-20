import Swiper,{Navigation, Pagination} from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.licenses-swiper', {
  loop: false,
  watchOverflow:true,

  pagination:{
    el: '.licenses-swiper-pagination',
    clickable:true,
    type:'fraction',

    // // если нужно добавить слово перед номером слайда то так
    renderFraction: function (CurrentClass, totalClass) {
        return '<span class="' + CurrentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
    },

},

navigation: {
  nextEl: '.licenses-swiper-btn-next',
  prevEl: '.licenses-swiper-btn-prev',
},


breakpoints:{
  1024:{
    spaceBetween: 60,
    slidesPerView: 3,
    slidesPerGroup:3,
  },
  769:{
    spaceBetween:40,
    slidesPerView: 3,
    slidesPerGroup: 1,
  },

  460:{
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween:29,
  },

  200: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },


},
});
