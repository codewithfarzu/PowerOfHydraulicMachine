$(document).ready(function () {
  let counted = false; // To make sure it counts only once
  function isScrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function startCount() {
    $('.counter1').each(function () {
      let $this = $(this);
      let target = parseInt($this.attr('data-target'));
      $({ countNum: 0 }).animate({ countNum: target }, {
        duration: 2000, // 2 seconds
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }

  $(window).on('scroll', function () {
    if (!counted && isScrolledIntoView('.counter1')) {
      startCount();
      counted = true;
    }
  });
});

/* Carousel ==================================== */

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,   // 2 seconds
    autoplayHoverPause: true,

    margin: 15,
    nav: false,
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

/* Client Review Carousel ======================== */
$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,   // 2 seconds
    autoplayHoverPause: true,

    margin: 15,
    nav: false,
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
});

/* Grow Count ================================= */
$(document).ready(function () {

  let animated = false; // prevent re-running

  function startCircleAnimation() {

    $(".circle").each(function () {
      let $circle = $(this);
      let target = parseInt($circle.data("percent"));
      let $number = $circle.find(".number");
      let count = 0;

      let interval = setInterval(function () {
        if (count >= target) {
          clearInterval(interval);
        } else {
          count++;
          $number.text(count + "%");

          $circle.css(
            "background",
            `conic-gradient(#fff ${count * 3.6}deg, #daa520 0deg)`
          );
        }
      }, 20);
    });
  }

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let sectionTop = $(".skills-wrapper").offset().top;

    if (!animated && scrollTop + windowHeight > sectionTop + 100) {
      animated = true;
      startCircleAnimation();
    }
  });

});

/* Our Client Carousel==================== */
$(document).ready(function () {
  $("#owl-demo2, #owl-demo3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,   // 2 seconds
    autoplayHoverPause: true,

    // margin: 15,
    nav: false,
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });
});

