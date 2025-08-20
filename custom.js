$(document).ready(function () {
  $(".review-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
            {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  // mobile menu 
 // open menu
  $(".mobile-menu").click(function(e){
    e.stopPropagation();
    $(".menu-container").addClass("active");
  });

  // close menu (close btn + link click)
  $(".menu-close, .menu-item li a").click(function(){
    $(".menu-container").removeClass("active");
  });

  // close menu on outside click
  $(document).click(function(e){
    if(!$(e.target).closest(".menu-container, .mobile-menu").length){
      $(".menu-container").removeClass("active");
    }
  });


  document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    // Close other accordions
    document.querySelectorAll(".accordion-content").forEach((c) => {
      if (c !== content) {
        c.style.maxHeight = null;
        c.classList.remove("active");
      }
    });
    document.querySelectorAll(".accordion-header .icon").forEach((i) => {
      if (i !== icon) i.textContent = "+";
    });

    // Toggle current
    if (content.classList.contains("active")) {
      content.style.maxHeight = null;
      content.classList.remove("active");
      icon.textContent = "+";
    } else {
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});

});
