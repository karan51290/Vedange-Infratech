// Shared behavior for every page: sticky auto-hide header, mobile nav toggle,
// scroll-to-top button, scroll-triggered fade-ins, and (on contact.html only)
// a WhatsApp-redirect contact form. Vanilla JS, no build step, no dependencies.

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById('site-header');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNav = document.getElementById('mobile-nav');

  // ---- Sticky header: hide on scroll-down, reveal on scroll-up ----
  let lastScrollY = window.scrollY;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (header) {
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('is-visible', currentScrollY > 300);
    }
    lastScrollY = currentScrollY;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile menu toggle ----
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuIconOpen?.classList.toggle('hidden', isOpen);
      menuIconClose?.classList.toggle('hidden', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        menuIconOpen?.classList.remove('hidden');
        menuIconClose?.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Scroll to top ----
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Fade-in on scroll into view ----
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Contact form -> WhatsApp redirect ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = contactForm.dataset.whatsappPhone || '';
      const name = contactForm.querySelector('#cf-name')?.value.trim() || '';
      const contactNumber = contactForm.querySelector('#cf-phone')?.value.trim() || '';
      const service = contactForm.querySelector('#cf-service')?.value || '';
      const message = contactForm.querySelector('#cf-message')?.value.trim() || '';

      const lines = [
        'New inquiry from vedangainfratech.in',
        name ? `Name: ${name}` : null,
        contactNumber ? `Phone: ${contactNumber}` : null,
        service ? `Service required: ${service}` : null,
        message ? `Message: ${message}` : null,
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
    });
  }

  // ---- Home hero image carousel ----
  const heroCarousel = document.getElementById('hero-carousel');
  const heroTrack = document.getElementById('hero-carousel-track');
  if (heroCarousel && heroTrack) {
    const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
    const dots = Array.from(heroCarousel.querySelectorAll('.hero-carousel-dot'));
    let activeIndex = 0;
    let timer = null;

    const showSlide = (index) => {
      dots[activeIndex]?.classList.remove('is-active');
      activeIndex = index;
      heroTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
      dots[activeIndex]?.classList.add('is-active');
    };

    const startAutoplay = () => {
      timer = window.setInterval(() => {
        showSlide((activeIndex + 1) % slides.length);
      }, 5000);
    };

    if (slides.length > 1) {
      dots[0]?.classList.add('is-active');
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showSlide(index);
          window.clearInterval(timer);
          startAutoplay();
        });
      });
      startAutoplay();
    }
  }

  // ---- Certificate lightbox (about.html) ----
  const certLightbox = document.getElementById('cert-lightbox');
  const certLightboxImg = document.getElementById('cert-lightbox-img');
  const certLightboxClose = document.getElementById('cert-lightbox-close');
  if (certLightbox && certLightboxImg) {
    const openCertLightbox = (src, alt) => {
      certLightboxImg.src = src;
      certLightboxImg.alt = alt || '';
      certLightbox.classList.remove('hidden');
      certLightbox.classList.add('flex');
    };
    const closeCertLightbox = () => {
      certLightbox.classList.add('hidden');
      certLightbox.classList.remove('flex');
      certLightboxImg.src = '';
    };
    document.querySelectorAll('.cert-lightbox-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        openCertLightbox(trigger.dataset.certImage, trigger.dataset.certAlt);
      });
    });
    certLightboxClose?.addEventListener('click', closeCertLightbox);
    certLightbox.addEventListener('click', (e) => {
      if (e.target === certLightbox) closeCertLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCertLightbox();
    });
  }

  // ---- FAQ accordions (any page) ----
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      if (answer) answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : '0px';
      chevron?.classList.toggle('rotate-180', isOpen);
      question.setAttribute('aria-expanded', String(isOpen));
    });
  });
});
