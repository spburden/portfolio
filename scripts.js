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

});
