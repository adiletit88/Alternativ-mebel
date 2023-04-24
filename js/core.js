$(document).ready(function() {
	// ====== inputmask ======

  $('.slider-for').each(function(i, e){
    let slideTab = $(e).closest('.slider_wrap').find('.slider-nav')
    $(e).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: slideTab
    });
  })
  $('.slider-nav').each(function(i, e){
    let slideFor = $(e).closest('.slider_wrap').find('.slider-for')
    let slidesToShow = 4
    if($(e).closest('.recommend').length != 0){
      slidesToShow = 3
    }
    $(e).slick({
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      asNavFor: slideFor,
      arrows: false,
      dots: false,
      focusOnSelect: true
    });
  })



})