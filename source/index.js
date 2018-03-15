import './style/style.scss';

// modal

const greenButtons = document.querySelectorAll('.lab-button.-green');
const blueButtons = document.querySelectorAll('.lab-button.-blue');
const pinkButtons = document.querySelectorAll('.lab-button.-pink');
const sectionAbout = document.querySelector('.section-about');
const sectionLinks = document.querySelector('.section-links');
const sectionActivities = document.querySelector('.section-activities');
const closeModals = document.querySelectorAll('.close-modal');
const noScroll = document.querySelector('body');

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

pinkButtons.forEach(function(pinkButton) {
  pinkButton.onclick = function() {
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
