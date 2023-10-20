
const isMobile ={
  Android: function(){
      return navigator.userAgent.match(/Android/i);
  },
  Blackberry:function () {
      return navigator.userAgent.match(/Blackberry/i);
  },
  iOS:function(){
      return navigator.userAgent.match(/IPhone|iPad|iPod/i);
  },
  Opera:function(){
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows:function(){
      return navigator.userAgent.match(/IEMobile/i);
  },
  any:function(){
      return(
          isMobile.Android() ||
          isMobile.Blackberry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows());
  }
};

// Реализация бургер-меню
// import {  burger } from './functions/burger'

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-menu');
if(burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('main-menu--active');
    document.body.classList.toggle('_lock');
  })

}

// искать только класс.menu__link с атрибутом [data-goto]
const menuLinks = document.querySelectorAll('.main-menu__link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function  onMenuLinkClick(e) {
        const menuLink = e.target;

            if(burger.classList.contains('burger--active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('burger--active');
                menu.classList.remove('main-menu--active');
            }




    }

}
