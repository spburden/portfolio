$(document).ready(function() {

  $("#home").click(function() {
    $('html, body').animate({
      scrollTop: $(".pageOne").offset().top
    }, 1500);
  });

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $(".pageTwo").offset().top
    }, 1500);
  });

  $("#portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $(".pageThree").offset().top
    }, 1500);
  });

  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $(".pageFour").offset().top
    }, 1500);
  });

  $('select').on('change', function() {
    // var language_array = array()
    var language = this.value;
    // alert(language);
    if (language === "all") {
      $('.col-sm-4').show();
    } else if (language === "php") {
      $('.col-sm-4').hide();
      $('.php').show();
    } else if (language === "js") {
      $('.col-sm-4').hide();
      $('.js').show();
    } else if (language === "drupal") {
      $('.col-sm-4').hide();
      $('.drupal').show();
    }
    $('html, body').animate({
      scrollTop: $(".pageThree").offset().top
    }, 500);
  });

});

// BACKEND //
