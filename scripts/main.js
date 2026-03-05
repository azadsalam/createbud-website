/* ============================================================
   MAIN.JS — CreateBud landing page interactivity
   1. Navbar scroll effect (Step 12)
   2. Scroll fade-in animations via IntersectionObserver (Step 13)
   3. Mobile hamburger menu toggle
============================================================ */

/* ----------------------------------------------------------
   1. Navbar: add/remove `.scrolled` class on scroll
---------------------------------------------------------- */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 60;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is pre-scrolled
})();


/* ----------------------------------------------------------
   2. Scroll fade-in: IntersectionObserver adds `.visible`
      to elements with the `.fade-up` class.
      JS selects the elements to animate — no HTML changes needed.
---------------------------------------------------------- */
(function () {
  const ANIMATE_SELECTORS = [
    '.hero__eyebrow',
    '.hero__headline',
    '.hero__sub',
    '.hero__actions',
    '.stakes__quote',
    '.stakes__label',
    '.stakes__card',
    '.hiw__eyebrow',
    '.hiw__title',
    '.hiw__step',
    '.hiw__connector',
    '.tracks__eyebrow',
    '.tracks__title',
    '.tracks__card',
    '.why__eyebrow',
    '.why__title',
    '.why__tile',
    '.team__eyebrow',
    '.team__title',
    '.team__card',
    '.cta__headline',
    '.cta__sub',
    '.cta__form',
    '.cta__secondary',
  ];

  const targets = document.querySelectorAll(ANIMATE_SELECTORS.join(', '));

  if (!targets.length || !('IntersectionObserver' in window)) {
    // Fallback: just make everything visible
    targets.forEach(el => el.classList.add('fade-up', 'visible'));
    return;
  }

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
})();


/* ----------------------------------------------------------
   3. Mobile hamburger menu toggle
---------------------------------------------------------- */
(function () {
  const hamburger = document.querySelector('.navbar__hamburger');
  const links = document.querySelector('.navbar__links');
  const navbarCta = document.querySelector('.navbar__cta');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', function () {
    const isOpen = links.classList.toggle('navbar__links--open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (navbarCta) navbarCta.classList.toggle('navbar__cta--mobile-open', isOpen);
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('navbar__links--open');
      hamburger.setAttribute('aria-expanded', 'false');
      if (navbarCta) navbarCta.classList.remove('navbar__cta--mobile-open');
    });
  });
})();
