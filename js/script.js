$(document).ready(function () {
  // Header Sticky
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }

    // Scroll up btn
    if (this.scrollY > 500) {
      $(".scroll-btn").addClass("show");
    } else {
      $(".scroll-btn").removeClass("show");
    }
  });

  //Scroll up btn
  $(".scroll-btn").click(function () { 
    window.scrollTo(0, 0);
  });

  // Text Animation
  let typed = new Typed(".typing", {
    strings: ["Firts text", "Second text", "Third text"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  let typed2 = new Typed(".typing2", {
    strings: ["Firts text", "Second text", "Third text"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".slider").owlCarousel({
    margin: 20,
  });


  

});
