$(".footer-links-wrapper h3").click(function () {
    if ($(window).width() <= 768) {
      $(this).next().slideToggle();
      $(this).toggleClass("iconRotator");
    }
});

$(window).resize(function () {
  
});
