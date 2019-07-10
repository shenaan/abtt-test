$(document).ready(function(){

// Page Header
$('.page-header__hamburger').on('click', () => {
  let header = $('.page-header');
  header.toggleClass('is-opened');

  if ($(window).width() < 768) {
    if (header.hasClass('is-opened')) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }
});

$('.page-header .menu-item-has-children').find('a').on('click', function(e) {
	$('.menu-item-has-children a').removeClass('open-sub-menu');
	$('.menu-item-has-children .sub-menu').removeClass('opened');
	$(this).toggleClass('open-sub-menu');
	$(this).siblings('.sub-menu').toggleClass('opened');
	e.preventDefault();
	return false;
});
// /Page Header

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            autoHeight: true
        },
        1024:{
            items:1,
            autoHeight: true
        }
    }
})
// /Owl Carousel
})