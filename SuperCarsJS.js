// Select both scrolling elements
const scrolling = document.querySelector('.scrolling');
const scrolling2 = document.querySelector('.scrolling2');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.from-bottom');
const navLinks = document.querySelectorAll('.nav-link');
const home = document.getElementById('Home');
const about = document.querySelector('#About');
const bugatti = document.getElementById('Bugatti');
const lambo = document.getElementById('lambo');
const mcl = document.getElementById('McL');
const support = document.getElementById('support');
const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const bugattiLink = document.querySelector('.bugatti');
const lamboLink = document.querySelector('.lambo');
const mclLink = document.querySelector('.mcl');
const supportLink = document.querySelector('.support');
const sec1 = document.querySelector('.section1');
const sec2 = document.querySelector('.section2');


// Update Navbar ----------------------------------------------------------------------

// Main rootMargin
const homeObserverOptions = {
  rootMargin: "-50% 0px 0px 0px",
  threshold: .25
};

// Home section
const homeObserver = new IntersectionObserver(function(entries, homeObserverOptions) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      homeLink.classList.remove("active");
    } else {
      homeLink.classList.add("active");
    }
  });
}, homeObserverOptions);

// About section
const aboutObserver = new IntersectionObserver(function(entries, homeObserverOptions) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      aboutLink.classList.remove("active");
    } else {
      aboutLink.classList.add("active");
    }
  });
}, homeObserverOptions);

homeObserver.observe(sec1);
aboutObserver.observe(sec2);
// ------------------------------------------------------------------------------------

// This sets the range that is needed for observing.
// Threshold being 1 makes it only work when the full element is in the viewport
// Root margin can also be used here.
const beginScrollOptions = {
  threshold: 0
};

// Function to Insert class name when in range
const beginScroll = new IntersectionObserver
(function(entries, beginScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {

      entry.target.classList.add('scrollAnimation');
      scrolling2.classList.add('scrollAnimation2')
      // beginScroll.unobserve(entry.target);

    }
  })
}, beginScrollOptions);

beginScroll.observe(scrolling);

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -300px 0px'
};

// Insert fade in class
const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// To add active state when nav bar links clicked
$(".nav-link").on("click", function(){
	$(".nav-link.active").removeClass("active");
	$(this).addClass("active");
});

