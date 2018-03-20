$(document).ready(function() {
  var navHeight = $('#bs-example-navbar-collapse-1').outerHeight();
  $("nav a").click(function() {
    var part = this.attributes['data-part'].value;
    $('html, body').animate({
      scrollTop: $("." + part).offset().top - navHeight
    }, 1000);
  });
  $('select').on('change', function() {
    var language = this.value;
    if (language === "all") {
      $('.porto').fadeIn("slow");
    } else {
      $('.porto').fadeOut("slow");
      $('.' + language).fadeIn("slow");
    }
    $('html, body').animate({
      scrollTop: $(".pageThree").offset().top
    }, 1200);
  });


  $('.page-scroll a').on('click', function(event) {
    $(this).blur();
    $('a').removeClass('active');
    // $(this).addClass('active');
  });

  $(window).on('scroll', function() {
    $('.section').each(function() {
      var scrollBottom = $(window).scrollTop() + $(window).height();
      if((scrollBottom >= $(this).offset().top) && ($(this).attr('id') === "pageFour")) {
        var id = $(this).attr('id');
        $('.page-scroll a').removeClass('active');
        $('.page-scroll a[data-part='+ id +']').addClass('active');
      }
      if((($(window).scrollTop() + navHeight) >= $(this).offset().top) && ($(this).attr('id') !== "pageFour")) {
        var id2 = $(this).attr('id');
        $('.page-scroll a').removeClass('active');
        $('.page-scroll a[data-part='+ id2 +']').addClass('active');
      }
    });
  });
});
