// Select both scrolling elements
const scrolling = document.querySelector('.scrolling');
const scrolling2 = document.querySelector('.scrolling2');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.from-bottom');

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
})
