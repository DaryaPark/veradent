import GraphModal from 'graph-modal';
const modal = new GraphModal();

// const imgBtn = document.querySelectorAll('.licenses__item')
document.querySelectorAll('.licenses-wrapper img').forEach(img =>{
  img.onclick = () => {
    document.querySelector('.graph-modal img').src = img.getAttribute('src');
  }
})

// if (imgBtn) {
//   imgBtn.addEventListener("click", function(e) {
//     document.querySelector('.graph-modal__content img').src = img.getAttribute('src');
//   })
// }

