
const blackBtn = document.querySelector('.black-theme-btn');
const mainHeader = document.querySelector('.header');
const bodyBlack = document.querySelector('body');
const whiteBtn = document.querySelector ('.white-theme-btn');
if(blackBtn) {
    blackBtn.addEventListener('click', () => {
    blackBtn.classList.add('--disabled');
    whiteBtn.classList.add('--active');
    mainHeader.classList.add('black');
    bodyBlack.classList.add('black-theme');
  })

}

if(whiteBtn) {
  whiteBtn.addEventListener('click', () => {
    whiteBtn.classList.remove('--active');
    blackBtn.classList.remove('--disabled');
    mainHeader.classList.remove('black');
    bodyBlack.classList.remove('black-theme');
  })

}
