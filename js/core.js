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

  $('.sale_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  $('.add_btn').on('click', function(){
    const addParent = $(this).closest('section')
    const addBlock = addParent.find('.add_block')
    if($(this).text() === 'Показать ещё'){
      addBlock.slideDown(300)
      addBlock.find('.slick-slider').slick('refresh')
      $(this).text('Скрыть')
    } else{
      addBlock.slideUp(300)
      $(this).text('Показать ещё')
    }
  })


  $('.scroll').on('click', function(){
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
  })


  $('.sale_btn').on('click', function(){
    $('.sale_form.active').removeClass('active')
    $(this).closest('.sale_slide').find('.sale_form').addClass('active')
  })

  $('.sale_form-close').on('click', function(){
    $(this).closest('.sale_form').removeClass('active')
  })


})