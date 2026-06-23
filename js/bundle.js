// ==================== ABOUT PAGE BEHAVIOURS ====================
// Powers: nav transparency toggle, scroll-reveal animations,
// hero animate-in, and mobile nav. The about page is the only
// page that loads this bundle.

class AnimationManager {
  init() {
    this.setupScrollReveal();
    this.setupPageTransitions();
    this.setupNavigationScroll();
  }

  setupScrollReveal() {
    const elements = $$('.scroll-reveal');
    if (elements.length === 0) return;

    elements.forEach(el => el.classList.add('revealing'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
              entry.target.classList.remove('revealing');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  setupPageTransitions() {
    const transitionEl = $('.page-transition');
    if (!transitionEl) return;

    document.body.classList.add('page-ready');
  }

  setupNavigationScroll() {
    const nav = $('.page-nav');
    if (!nav) return;

    const handleNavScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('page-nav--white');
      } else {
        nav.classList.add('page-nav--transparent');
      }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  revealHero() {
    const hero = $('.hero');
    if (hero) hero.classList.add('animate-in');
  }
}

const animations = new AnimationManager();

function setupMobileNav() {
  const toggle = $('.page-nav__toggle');
  const mobileNav = $('.page-nav__mobile');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  $$('.page-nav__mobile-link', mobileNav).forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      toggle.classList.remove('active');
    });
  });
}

function initPage() {
  const nav = $('.page-nav');
  if (nav) nav.classList.add('page-nav--white');

  animations.init();
  animations.revealHero();
  setupMobileNav();
}

document.addEventListener('DOMContentLoaded', initPage);
