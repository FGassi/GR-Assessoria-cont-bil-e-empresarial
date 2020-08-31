/*Nav Mobile*/

  const nav = document.querySelector(".nav-container");
  const div = document.querySelector(".overlay-menu");
  
  if (nav) {
    const toggle = nav.querySelector(".nav-toggle");
    
    if (toggle) {
      toggle.addEventListener("click", () => {
        if (nav.classList.contains("is-active")) {
          nav.classList.remove("is-active");
          div.classList.remove("back-overlay");
        }
        else {
          nav.classList.add("is-active");
          div.classList.add("back-overlay");
        }
      });
      
      nav.addEventListener("blur", () => {
        nav.classList.remove("is-active");
        div.classList.remove("back-overlay");
      });
    }
  }





/*Slider*/

/*Slideshow*/
$('.slideshow').slick({
  acessibility: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slideshowtext',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});
$('.slideshowtext').slick({
  acessibility: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slideshow',
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});

/*News*/ 
$('.newsslide').slick({
  acessibility: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*Services*/
$('.services').slick({
  acessibility: true,
  vertical: true,
  slidesToShow: 3,
  asNavFor: '.servicestext',
  swipe: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false
      }
    }
  ]
});

$('.servicestext').slick({
  acessibility: true,
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: '.services',
  swipe: false
});

/*Custom file input*/
Array.prototype.forEach.call(
  document.querySelectorAll(".input-form-file"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload-input"
    );
    const label = button.parentElement.querySelector(".input-form-file-label");
    const defaultLabelText = "Nenhum arquivo selecionado";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);

/*Back to top button*/
var btn = $('#topbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*Smooth Scroll*/
/*By W3CSchools*/ 
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      /*Speed*/ 
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

/*Scroll Spy*/
/*By P1xt*/
document.addEventListener('DOMContentLoaded', function(){ 
  
  // grab the sections (targets) and menu_links (triggers)
  // for menu items to apply active link styles to
  const sections = document.querySelectorAll(".homesection");
  const menu_links = document.querySelectorAll("#menudesktop nav.nav-menu ul li a");
  
  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 500;
  
  // keep track of the currently active link
  // use this so as not to change the active link over and over
  // as the user scrolls but rather only change when it becomes
  // necessary because the user is in a new section of the page
  let currentActive = 0;

  // listen for scroll events
  window.addEventListener("scroll", () => {
    
    // check in reverse order so we find the last section
    // that's present - checking in non-reverse order would
    // report true for all sections up to and including
    // the section currently in view
    //
    // Data in play:
    // window.scrollY    - is the current vertical position of the window
    // sections          - is a list of the dom nodes of the sections of the page
    //                     [...sections] turns this into an array so we can
    //                     use array options like reverse() and findIndex()
    // section.offsetTop - is the vertical offset of the section from the top of the page
    // 
    // basically this lets us compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false); 

