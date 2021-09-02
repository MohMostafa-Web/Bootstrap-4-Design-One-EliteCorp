$(document).ready(function () {
  // Get Slider Height Dynamically
  const windowHeight = $(window).height();
  const upperBar = $(".upper-bar").innerHeight();
  const navBar = $(".navbar").innerHeight();

  $(".main-slider .slide, .main-slider .carousel-item").height(windowHeight - (upperBar + navBar));

  // set Carousel Slider interval time
  $(".carousel").carousel({
    interval: 1000000000,
  });

  // Featured Work Shuffle
  $(".featured-work ul li").on("click", function () {
    // add Class "active" to clicked li and remove Class "active" from others
    $(this).addClass("active").siblings("li").removeClass("active");
    console.log($(this).data("class")); // debug
    if ($(this).data("class") === ".all") {
      // if data-class = ".all", make all imgs opacity: 1;
      $(".shuffled-images img").css("opacity", 1);
    } else {
      $(".shuffled-images img").css("opacity", 0.3); // make all imgs opacity: 0.3;
      $($(this).data("class")).css("opacity", 1); // make only imgs has this class opacity: 1;
    }
  });
});
