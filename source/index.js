import './style/style.scss';

// modal

var greenButtons = $('.lab-button.-green');
var blueButtons = $('.lab-button.-blue');
var orangeButtons = $('.lab-button.-orange');
var sectionAbout = $('.section-about');
var sectionLinks = $('.section-links');
var sectionActivities = $('.section-activities');
var closeModals = $('.close-modal');
var body = $('body');

greenButtons.click(function(){
  history.pushState(undefined, undefined, "quem-somos");

  sectionAbout.addClass('-active');
  body.addClass('-noscroll');
});

blueButtons.click(function(){
  history.pushState(undefined, undefined, "nos-acompanhe");
  sectionLinks.addClass('-active');
  body.addClass('-noscroll');
});

orangeButtons.click(function(){
  history.pushState(undefined, undefined, "nossas-atividades");
  sectionActivities.addClass('-active');
  body.addClass('-noscroll');
});

function removeModal() {
  sectionAbout.removeClass('-active');
  sectionLinks.removeClass('-active');
  sectionActivities.removeClass('-active');
  body.removeClass('-noscroll');
}

closeModals.click(function(){
  removeModal();
  history.back()
});

window.onpopstate = function(event) {
  removeModal();
};

// Esc remove modal
$(document).keyup(function(e) {
   if (e.keyCode == 27) {
     if (sectionAbout.hasClass('-active') || sectionLinks.hasClass('-active') || sectionActivities.hasClass('-active')) {
       removeModal();
       history.back();
     }
  };
});

// carousel
var carouselOptions = $('.section-carousel .option');

function startCarousel() {
  var activeItem = $('.section-carousel .item.-active');
  var activeOption = $('.section-carousel .option.-active');

  if (activeItem.next) {
    activeItem.next().addClass('-active');
    activeOption.next().addClass('-active');
  } else {
    activeItem.parent().first().addClass('-active');
    activeOption.parent().first().addClass('-active');
  }
  activeItem.removeClass('-active');
  activeOption.removeClass('-active');
}

var time = 5000;
$('.section-carousel .item:first-child').addClass('-active');
var carousel = setInterval(startCarousel, time);


$.each(carouselOptions, function(i, carouselOption){
  $(carouselOption).click(function(e) {
    var itemIndex = parseInt($(e.target).data('item'));

    var activeItem = $('.section-carousel .item.-active');
    var activeOption = $('.section-carousel .option.-active');
    activeItem.removeClass('-active');
    activeOption.removeClass('-active');

    var item = $('.section-carousel .item')[itemIndex];
    $(item).addClass('-active');
    $(e.target).addClass('-active');

    clearInterval(carousel);
    carousel = setInterval(startCarousel, time);
  })
});
