// Select both scrolling elements
const scrolling = document.querySelector('.scrolling');
const scrolling2 = document.querySelector('.scrolling2');

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
