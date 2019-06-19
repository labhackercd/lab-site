import './style/style.scss';

// modal

var aboutButtons = $('.js-openAbout');
var linksButtons = $('.js-openLinks');
var activitiesButtons = $('.js-openActivities');
var sectionAbout = $('.section-about');
var sectionLinks = $('.section-links');
var sectionActivities = $('.section-activities');
var closeModals = $('.close-modal');
var body = $('body');

$(window).on('load', function() {

  if(window.location.href.indexOf('#quem-somos') != -1) {
    sectionAbout.addClass('-active');
    body.addClass('-noscroll');
  }

  if(window.location.href.indexOf('#nos-acompanhe') != -1) {
    sectionLinks.addClass('-active');
    body.addClass('-noscroll');
  }

  if(window.location.href.indexOf('#nossas-atividades') != -1) {
    sectionActivities.addClass('-active');
    body.addClass('-noscroll');
  }

});

aboutButtons.click(function(){
  history.pushState(undefined, undefined, "#quem-somos");

  sectionAbout.addClass('-active');
  body.addClass('-noscroll');
});

linksButtons.click(function(){
  history.pushState(undefined, undefined, "#nos-acompanhe");
  sectionLinks.addClass('-active');
  body.addClass('-noscroll');
});

activitiesButtons.click(function(){
  history.pushState(undefined, undefined, "#nossas-atividades");
  sectionActivities.addClass('-active');
  body.addClass('-noscroll');
});

function removeModal() {
  $('.js-page').removeClass('-active')
  body.removeClass('-noscroll');
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
}

closeModals.click(function(){
  removeModal();
});

window.onpopstate = function(event) {
  removeModal();
};

// Esc remove modal
$(document).keyup(function(e) {
   if (e.keyCode == 27) {
     if ($('.js-page').hasClass('-active')) {
       removeModal();
     }
  };
});

// carousel
var carouselOptions = $('.section-carousel .option');

function startCarousel() {
  var activeItem = $('.section-carousel .item.-active');
  var activeOption = $('.section-carousel .option.-active');

  if (activeItem.next()[0]) {
    activeItem.next().addClass('-active');
    activeOption.next().addClass('-active');
  } else {
    activeItem.parent().children().first().addClass('-active');
    activeOption.parent().children().first().addClass('-active');
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
