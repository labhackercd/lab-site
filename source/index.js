import './style/style.scss';

// modal

const greenButtons = document.querySelectorAll('.lab-button.-green');
const blueButtons = document.querySelectorAll('.lab-button.-blue');
const orangeButtons = document.querySelectorAll('.lab-button.-orange');
const sectionAbout = document.querySelector('.section-about');
const sectionLinks = document.querySelector('.section-links');
const sectionActivities = document.querySelector('.section-activities');
const closeModals = document.querySelectorAll('.close-modal');
const noScroll = document.querySelector('body');
const carouselOptions = document.querySelectorAll('.section-carousel .option');

greenButtons.forEach(function(greenButton) {
  greenButton.onclick = function() {
    sectionAbout.classList.add('-active');
    noScroll.classList.add('-noscroll');
  }
})

blueButtons.forEach(function(blueButton) {
  blueButton.onclick = function() {
    sectionLinks.classList.add('-active');
    noScroll.classList.add('-noscroll');
  }
})

orangeButtons.forEach(function(orangeButton) {
  orangeButton.onclick = function() {
    sectionActivities.classList.add('-active');
    noScroll.classList.add('-noscroll');
  }
})

closeModals.forEach(function(closeModal) {
  closeModal.onclick = function() {
    sectionAbout.classList.remove('-active');
    sectionLinks.classList.remove('-active');
    sectionActivities.classList.remove('-active');
    noScroll.classList.remove('-noscroll');
  }
})

// carousel
function startCarousel() {
  const activeItem = document.querySelector('.section-carousel .item.-active');
  const activeOption = document.querySelector('.section-carousel .option.-active');
  if (activeItem.nextElementSibling) {
    activeItem.nextElementSibling.classList.add('-active');
    activeOption.nextElementSibling.classList.add('-active');
  } else {
    activeItem.parentNode.firstElementChild.classList.add('-active');
    activeOption.parentNode.firstElementChild.classList.add('-active');
  }
  activeItem.classList.remove('-active');
  activeOption.classList.remove('-active');
}

const time = 5000;
document.querySelector('.section-carousel .item:first-child').classList.add('-active');
let carousel = setInterval(startCarousel, time);

carouselOptions.forEach(function(carouselOption) {
  carouselOption.onclick = function(e) {
    const itemIndex = e.target.dataset.item;

    const activeItem = document.querySelector('.section-carousel .item.-active');
    const activeOption = document.querySelector('.section-carousel .option.-active');
    activeItem.classList.remove('-active');
    activeOption.classList.remove('-active');

    const item = document.querySelectorAll('.section-carousel .item')[itemIndex];
    item.classList.add('-active');
    e.target.classList.add('-active');

    clearInterval(carousel);
    carousel = setInterval(startCarousel, time);
  }
})
