const contactsBtn = document.querySelector('.contacts__btn');
const moreBlock = document.querySelector('.contacts-show-more');
if (contactsBtn){
  contactsBtn.addEventListener("click", function(e) {
      moreBlock.classList.toggle('_active');
      contactsBtn.classList.toggle('_active');
    });
}
