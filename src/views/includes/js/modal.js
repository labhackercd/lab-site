document.querySelector('.lab-button.-green').onclick = function() {
  document.querySelector('.section-about').classList.add('-active');
}

document.querySelector('.lab-button.-blue').onclick = function() {
  document.querySelector('.section-links').classList.add('-active');
}

document.querySelector('.close-about').onclick = function() {
  document.querySelector('.section-about').classList.remove('-active');
  document.querySelector('.section-links').classList.remove('-active');
}
