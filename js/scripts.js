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
    // setTimeout(function(){
      if (language === "all") {
        $('.porto').fadeIn("slow");
      } else if (language === "php") {
        $('.porto').fadeOut("slow");
        $('.php').fadeIn("slow");
      } else if (language === "js") {
        $('.porto').fadeOut("slow");
        $('.js').fadeIn("slow");
      } else if (language === "drupal") {
        $('.porto').fadeOut("slow");
        $('.drupal').fadeIn("slow");
      }
    // }, 1000);
    $('html, body').animate({
      scrollTop: $(".pageThree").offset().top
    }, 1000);
  });

});

// BACKEND //
