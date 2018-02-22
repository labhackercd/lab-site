import './style/style.scss';
import './style/style.css';

// modal

var greenButtons = document.querySelectorAll('.lab-button.-green');
var blueButtons = document.querySelectorAll('.lab-button.-blue');
var sectionAbout = document.querySelector('.section-about');
var sectionLinks = document.querySelector('.section-links');
var closeModals = document.querySelectorAll('.close-modal');

greenButtons.forEach(function(greenButton) {
  greenButton.onclick = function() {
    sectionAbout.classList.add('-active');
  }
})

blueButtons.forEach(function(blueButton) {
  blueButton.onclick = function() {
    sectionLinks.classList.add('-active');
  }
})

closeModals.forEach(function(closeModal) {
  closeModal.onclick = function() {
    sectionAbout.classList.remove('-active');
    sectionLinks.classList.remove('-active');
  }
})
