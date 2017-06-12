$(document).ready(function() {
  $("nav a").click(function() {
    var part = this.attributes['data-part'].value;
    $('html, body').animate({
      scrollTop: $("." + part).offset().top
    }, 1500);
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
    }, 1000);
  });
});
