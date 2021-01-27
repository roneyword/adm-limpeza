export default function lightBox(){

const galeryIMG = document.querySelectorAll('.content__portfolio img');
const modalLightbox = document.querySelector('.modal__lightbox');
const boxIMG = document.querySelector('.modal__content img');
const containerIMG = document.querySelector('.modal__content');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const descriptionOverlay = [...document.querySelectorAll('.content__portfolio h3')];
const descriptionModal = document.querySelector('.modal__content .modal__title h3')
const arrayIMG = []
const arrayClassEfect = ['fade-top', 'fade-bottom', 'fade-left', 'fade-right'];
let urlIMG = './assets/img/portifolio/';
let current = 0;
let numberRandomPrev = 0;
let randomNumber = 0;

const initArrayImg = () => {
  galeryIMG.forEach((img) => {
    arrayIMG.push(img.getAttribute('data-img'))
  })
}

initArrayImg();

galeryIMG.forEach((img, index) => {
  img.addEventListener('click', () => {
    modalLightbox.classList.add('active');
    boxIMG.src = urlIMG + arrayIMG[index];
    setDescriptionModal(index);
    current = index;
  })
})


btnNext.addEventListener('click', () => {
  if(current >= arrayIMG.length - 1) return;
  current += 1;
  boxIMG.src = urlIMG + arrayIMG[current];
  setDescriptionModal(current);
  removeClassContainerImg();
  randomClassEfect();
});

btnPrev.addEventListener('click', () => {
  if(current <= 0) return
  current -= 1;
  boxIMG.src = urlIMG + arrayIMG[current];
  setDescriptionModal(current);
  removeClassContainerImg();
  randomClassEfect();
});

const setDescriptionModal = (index) => {
  descriptionModal.innerHTML = descriptionOverlay[index].innerHTML;
}

const removeClassContainerImg = () => {
  containerIMG.classList = "";
  containerIMG.classList.add('modal__content');
}

const randomClassEfect = () => {
  do {
    randomNumber = Math.floor(Math.random() * 4);
  } while (randomNumber == numberRandomPrev);

  containerIMG.classList.add(arrayClassEfect[randomNumber]);
  numberRandomPrev = randomNumber;
}

  modalLightbox.addEventListener('click', (event) => {
    const modalID = event.target.id;
    if(modalID == "modal-lb"){
      modalLightbox.classList.remove('active');
    }
  })
}