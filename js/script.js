$(function () {
  var $header = $("#site-header");  // Editorial hero carousel
  var $slides = $(".hero-slide");
  var $dots = $(".hero-dot");
  var slideIndex = 0;
  var carouselTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var slideMessages = [
    "through the storm.",
    "people are not alone.",
    "care becomes action.",
    "recovery takes time.",
    "hope remains."
  ];

  var slideDescriptions = [
    "In moments of uncertainty, compassion connects us. Our thoughts are with every family and community affected by floods across Nepal.",
    "To every family facing uncertainty, every person waiting for loved ones, and every community helping its neighbors — you are not alone.",
    "Small, careful acts of support can help communities respond with dignity while avoiding rumors and unverified appeals.",
    "After floodwaters recede, affected communities may still face disruption. Recovery is a process of rebuilding everyday life.",
    "Compassion, resilience and community can help carry people toward a quieter horizon and new beginnings."
  ];

  function showSlide(index, restartTimer) {
    slideIndex = (index + $slides.length) % $slides.length;
    $slides.removeClass("is-active").eq(slideIndex).addClass("is-active");
    $dots.removeClass("is-active").attr("aria-current", "false").eq(slideIndex).addClass("is-active").attr("aria-current", "true");
    $(".hero-message").text(slideMessages[slideIndex]);
    $(".hero-description").text(slideDescriptions[slideIndex]);

    if (restartTimer) startCarousel();
  }

  function startCarousel() {
    if (reducedMotion) return;
    clearInterval(carouselTimer);
    carouselTimer = setInterval(function () {
      showSlide(slideIndex + 1, false);
    }, 1000);
  }

  $dots.on("click", function () {
    showSlide(parseInt($(this).data("slide"), 10), true);
  });

  // Pause the two-second auto-advance on hover/focus, resume on leave.
  // Carousel timing is intentionally independent of scroll position.
  $(".hero").on("mouseenter focusin", function () {
    clearInterval(carouselTimer);
  }).on("mouseleave focusout", function () {
    startCarousel();
  });


  var $body = $("body");
  var $nav = $("#main-nav");
  var $menu = $(".menu-toggle");

  function updateHeader() {
    $header.toggleClass("scrolled", $(window).scrollTop() > 18);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var progress = max > 0 ? ($(window).scrollTop() / max) * 100 : 0;
    $(".site-progress span").css("width", progress + "%");
  }

  $menu.on("click", function () {
    var open = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!open));
    $(this).attr("aria-label", open ? "Open navigation menu" : "Close navigation menu");
    $nav.toggleClass("open", !open);
    $body.toggleClass("no-scroll", !open);
  });

  $("#main-nav a").on("click", function () {
    $menu.attr("aria-expanded", "false").attr("aria-label", "Open navigation menu");
    $nav.removeClass("open");
    $body.removeClass("no-scroll");
  });

  // Reliable in-page navigation.
  // Uses native scrolling so the site works correctly even when index.html
  // is opened directly from the local filesystem.
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='#']");
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href || href === "#") return;

    var id = href.substring(1);
    var target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();

    $menu.attr("aria-expanded", "false")
         .attr("aria-label", "Open navigation menu");
    $nav.removeClass("open");
    $body.removeClass("no-scroll");

    var headerHeight = $header.outerHeight() || 0;
    var targetTop = target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight - 8;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });

    // Update the hash without triggering a second browser jump.
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", "#" + id);
    }

    // Reflect the click immediately rather than waiting for scroll to settle.
    setActiveNavLink(id);
  });

  // Underline the nav link for whichever section is currently in view.
  var $navLinks = $(".nav-links a");
  var navSectionIds = ["home", "story", "safety", "action", "community", "hope", "resources"];

  function setActiveNavLink(id) {
    $navLinks.removeClass("is-active").removeAttr("aria-current");
    $navLinks.filter('[href="#' + id + '"]').addClass("is-active").attr("aria-current", "true");
  }

  var navSpyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActiveNavLink(entry.target.id);
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  navSectionIds.forEach(function (id) {
    var section = document.getElementById(id);
    if (section) navSpyObserver.observe(section);
  });

  var revealObserver = new IntersectionObserver(function (entries) {
    $.each(entries, function (_, entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $(".reveal").each(function () {
    revealObserver.observe(this);
  });

  function parallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    $("[data-parallax]").each(function () {
      var $el = $(this);
      var rect = this.getBoundingClientRect();
      if (rect.bottom > -100 && rect.top < window.innerHeight + 100) {
        var speed = parseFloat($el.data("parallax")) || 0;
        var offset = (rect.top - window.innerHeight / 2) * speed;
        $el.css("transform", "translate3d(0," + offset.toFixed(2) + "px,0)");
      }
    });
  }

  var raf = false;
  $(window).on("scroll resize", function () {
    updateHeader();
    if (!raf) {
      window.requestAnimationFrame(function () {
        parallax();
        raf = false;
      });
      raf = true;
    }
  });

  updateHeader();
  parallax();
  showSlide(0, false);
  startCarousel();

});