// ============================================
// SubSage Landing Page — Main JS v5
// Cinematic Hero + Stagger Demo (Plan A)
// ============================================

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { getCurrentLang, setLang, t } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// LENIS — Smooth Scroll
// ============================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// ============================================
// HERO — Cursor Tracking Gradient
// ============================================
const heroGlow = document.getElementById('heroGlow');
const heroSection = document.getElementById('hero');
if (heroSection && heroGlow) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    heroGlow.style.transform = `translate(${e.clientX - rect.left - 400}px, ${e.clientY - rect.top - 400}px)`;
  });
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
if (window.innerWidth >= 768) {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.15}px, ${(e.clientY - rect.top - rect.height / 2) * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

// ============================================
// MOBILE HAMBURGER MENU
// ============================================
const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
if (navHamburger && navLinks) {
  navHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navHamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close menu when a link is clicked
  navLinks.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('click', () => {
      navHamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navHamburger.contains(e.target)) {
      navHamburger.classList.remove('open');
      navLinks.classList.remove('open');
      navOverlay?.classList.remove('open');
    }
  });
}

// Mobile nav overlay
const navOverlay = document.getElementById('navOverlay');
if (navHamburger && navLinks) {
  const origClick = navHamburger.onclick;
  navHamburger.addEventListener('click', () => {
    navOverlay?.classList.toggle('open');
  });
  navLinks.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('click', () => {
      navOverlay?.classList.remove('open');
    });
  });
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      navHamburger.classList.remove('open');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('open');
    });
  }
}

// ============================================
// HERO — Cinematic Entry Animation + Typewriter
// ============================================
function initHeroEntry() {
  const tl = gsap.timeline({ delay: 0.3 });
  tl.from('.hero-badge', { y: -10, opacity: 0, duration: 0.5, ease: 'power3.out' })
    .from('.hero-title-line', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
    .from('.hero-title-highlight', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    .from('#heroDemoCard', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'transform' }, '-=0.3')
    .add(() => initHeroTypewriter(), '+=0.2');
}

// ============================================
// HERO — Typewriter Chat Animation
// ============================================
function getHeroConversations() {
  return [
    { user: t('demo1User'), ai: t('demo1Ai') },
    { user: t('demo2User'), ai: t('demo2Ai') },
    { user: t('demo3User'), ai: t('demo3Ai') },
  ];
}

let heroTyping = false;
let heroConvIndex = 0;

function updatePaginationDots(index) {
  const dots = document.querySelectorAll('#chatPagination .chat-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function initHeroTypewriter() {
  if (heroTyping) return;
  heroTyping = true;
  const convs = getHeroConversations();
  updatePaginationDots(0);
  runConversation(convs[heroConvIndex % convs.length]);
}

function runConversation(conv) {
  const userEl = document.getElementById('heroUserMsg');
  const aiEl = document.getElementById('heroAiMsg');
  if (!userEl || !aiEl) return;

  // Reset
  userEl.textContent = '';
  aiEl.innerHTML = '';
  gsap.set(userEl, { opacity: 0, scale: 0.85, y: 8 });
  gsap.set(aiEl, { opacity: 0, scale: 0.85, y: 8 });

  // 1. User bubble: spring in while typing
  gsap.to(userEl, {
    opacity: 1, scale: 1, y: 0, duration: 0.4,
    ease: 'back.out(1.7)',
  });

  typeText(userEl, conv.user, 35, () => {
    // 2. User bubble settle (micro-bounce)
    gsap.fromTo(userEl,
      { scale: 1.02 },
      { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.4)' }
    );

    // 3. Show thinking dots
    setTimeout(() => {
      aiEl.innerHTML = '<span class="thinking-dots"><span></span><span></span><span></span></span>';
      gsap.to(aiEl, {
        opacity: 1, scale: 1, y: 0, duration: 0.35,
        ease: 'back.out(1.7)',
      });

      // 4. Replace dots with actual reply (spring in)
      setTimeout(() => {
        gsap.to(aiEl, {
          scale: 0.92, opacity: 0.5, duration: 0.15,
          onComplete: () => {
            aiEl.textContent = conv.ai;
            gsap.to(aiEl, {
              scale: 1, opacity: 1, duration: 0.4,
              ease: 'back.out(1.7)',
            });
          }
        });
      }, 800);
    }, 400);

    // 5. Wait, then fade out and cycle
    setTimeout(() => {
      gsap.to([userEl, aiEl], {
        opacity: 0, y: -6, duration: 0.35, onComplete: () => {
          heroConvIndex++;
          const convs = getHeroConversations();
          updatePaginationDots(heroConvIndex % convs.length);
          runConversation(convs[heroConvIndex % convs.length]);
        }
      });
    }, 5200);
  });
}

function typeText(el, text, speed, callback) {
  let i = 0;
  el.textContent = '';
  function step() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(step, speed);
    } else if (callback) {
      callback();
    }
  }
  step();
}

// ============================================
// INTERFACES — Stagger Reveal on Scroll
// ============================================
function initInterfacesReveal() {
  const section = document.getElementById('interfacesSection');
  if (!section) return;

  ScrollTrigger.create({
    trigger: section,
    start: 'top 75%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline();
      tl.from('.interfaces-title', { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' });
      tl.from('.interface-card', {
        y: 50, opacity: 0, duration: 0.6, ease: 'power3.out',
        stagger: 0.15, clearProps: 'transform',
      }, '-=0.3');
    }
  });
}

// ============================================
// BENTO GRID — Glow Border + Stagger In
// ============================================
function initBentoGlow() {
  const grid = document.getElementById('bentoGrid');
  if (!grid || window.innerWidth < 768) return;
  grid.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.bento-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
    });
  });
}

function initFeaturesAnimation() {
  ScrollTrigger.create({
    trigger: '.bento-grid',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('.bento-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 80);
      });
    }
  });
}

// ============================================
// SCREENSHOTS — Tab switching + Phone frame + Lightbox
// ============================================
const ssImage = document.getElementById('ssImage');
const ssImageMobile = document.getElementById('ssImageMobile');
const ssPhoneFrame = document.getElementById('ssPhoneFrame');
const ssBrowserFrame = document.getElementById('ssBrowserFrame');

const screenshotMap = {
  overview:       { light: '/assets/screenshots/overview.png',       dark: '/assets/screenshots/overview-dark.png',       mobile: '/assets/screenshots/overview-mobile.png' },
  subscriptions:  { light: '/assets/screenshots/subscriptions.png',  dark: '/assets/screenshots/subscriptions-dark.png',  mobile: '/assets/screenshots/subscriptions-mobile.png' },
  calendar:       { light: '/assets/screenshots/calendar.png',       dark: '/assets/screenshots/calendar.png',            mobile: null },
  agent:          { light: '/assets/screenshots/agent.png',          dark: '/assets/screenshots/agent.png',               mobile: null },
  'edit-modal':   { light: '/assets/screenshots/edit-modal.png',     dark: '/assets/screenshots/edit-modal.png',           mobile: null },
};
let currentSS = 'overview', currentSSTheme = 'light';

function updateScreenshot() {
  if (!ssImage) return;
  const entry = screenshotMap[currentSS] || screenshotMap.overview;
  const desktopSrc = entry[currentSSTheme] || entry.light;
  const mobileSrc = entry.mobile;

  // Update desktop screenshot
  gsap.to(ssImage, { opacity: 0, duration: 0.2, onComplete: () => {
    ssImage.src = desktopSrc;
    ssImage.onload = () => gsap.to(ssImage, { opacity: 1, duration: 0.3 });
  }});

  // Update phone frame visibility + mobile screenshot
  const showPhone = mobileSrc && currentSSTheme === 'light';
  if (ssPhoneFrame) {
    if (showPhone) {
      ssPhoneFrame.classList.remove('hidden');
      if (ssImageMobile) {
        gsap.to(ssImageMobile, { opacity: 0, duration: 0.2, onComplete: () => {
          ssImageMobile.src = mobileSrc;
          ssImageMobile.onload = () => gsap.to(ssImageMobile, { opacity: 1, duration: 0.3 });
        }});
      }
    } else {
      ssPhoneFrame.classList.add('hidden');
    }
  }
}

// Tab buttons
document.querySelectorAll('.ss-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ss-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); currentSS = btn.dataset.ss; updateScreenshot();
  });
});

// Theme buttons
document.querySelectorAll('.ss-theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ss-theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); currentSSTheme = btn.dataset.theme;

    // Dark mode: hide tabs without dark screenshots (calendar, agent, edit-modal)
    const darkOnlyHidden = ['calendar', 'agent', 'edit-modal'];
    document.querySelectorAll('.ss-tab-btn').forEach(tabBtn => {
      if (darkOnlyHidden.includes(tabBtn.dataset.ss)) {
        tabBtn.style.display = currentSSTheme === 'dark' ? 'none' : '';
      }
    });
    // If currently viewing a hidden tab, switch to overview
    if (currentSSTheme === 'dark' && darkOnlyHidden.includes(currentSS)) {
      currentSS = 'overview';
      document.querySelectorAll('.ss-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.ss-tab-btn[data-ss="overview"]')?.classList.add('active');
    }

    updateScreenshot();
  });
});

// ============================================
// LIGHTBOX — Click to zoom + Arrow Navigation
// ============================================
const lightbox = document.getElementById('ssLightbox');
const lightboxImg = document.getElementById('ssLightboxImg');
const lightboxClose = document.getElementById('ssLightboxClose');
const lightboxPrev = document.getElementById('ssLightboxPrev');
const lightboxNext = document.getElementById('ssLightboxNext');

let lightboxGallery = [];
let lightboxIndex = 0;

// Build gallery: all desktop screenshots first, then all mobile
function buildLightboxGallery() {
  const desktops = [];
  const mobiles = [];
  const entries = Object.entries(screenshotMap);

  for (const [key, entry] of entries) {
    // Skip tabs hidden by dark mode
    const tabBtn = document.querySelector(`.ss-tab-btn[data-ss="${key}"]`);
    if (tabBtn && tabBtn.style.display === 'none') continue;

    // Desktop screenshot
    const desktopSrc = entry[currentSSTheme] || entry.light;
    if (desktopSrc) desktops.push(desktopSrc);

    // Mobile screenshot (only in light mode)
    if (entry.mobile && currentSSTheme === 'light') {
      mobiles.push(entry.mobile);
    }
  }
  return [...desktops, ...mobiles];
}

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxGallery = buildLightboxGallery();
  lightboxIndex = lightboxGallery.indexOf(src);
  if (lightboxIndex === -1) lightboxIndex = 0;
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  if (!lightboxGallery.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxGallery.length) % lightboxGallery.length;
  const newSrc = lightboxGallery[lightboxIndex];
  // Brief opacity fade for smooth transition
  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src = newSrc;
    lightboxImg.onload = () => { lightboxImg.style.opacity = '1'; };
  }, 150);
}

// Click on screenshots to open lightbox
document.querySelectorAll('.ss-clickable').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src));
});

// Close lightbox
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Arrow navigation
if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

// Keyboard: ESC close, Left/Right arrow navigate
document.addEventListener('keydown', (e) => {
  if (!lightbox?.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ============================================
// QUICK START — Tab switching (Agent + Manual)
// ============================================
// Agent install tabs
document.querySelectorAll('.tab-btn[data-qs-agent]').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.qs-agent');
    parent.querySelectorAll('.tab-btn[data-qs-agent]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    parent.querySelectorAll('[data-qs-agent-panel]').forEach(p => p.classList.remove('active'));
    parent.querySelector(`[data-qs-agent-panel="${btn.dataset.qsAgent}"]`)?.classList.add('active');
  });
});

// Manual install tabs
document.querySelectorAll('.tab-btn[data-qs]').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.qs-manual');
    parent.querySelectorAll('.tab-btn[data-qs]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    parent.querySelectorAll('[data-qs-panel]').forEach(p => p.classList.remove('active'));
    parent.querySelector(`[data-qs-panel="${btn.dataset.qs}"]`)?.classList.add('active');
  });
});

// ============================================
// COPY BUTTONS
// ============================================
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrap = btn.closest('.install-cmd-wrap');
    const code = wrap?.querySelector('.install-cmd');
    if (code) {
      navigator.clipboard.writeText(code.textContent.trim()).then(() => {
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 2000);
      });
    }
  });
});

// ============================================
// i18n — Language Switch
// ============================================
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val) el.textContent = val;
  });
}

const langSwitch = document.getElementById('langSwitch');
const langSwitchMobile = document.getElementById('langSwitchMobile');
function toggleLang() {
  const newLang = getCurrentLang() === 'en' ? 'zh' : 'en';
  if (document.startViewTransition) {
    document.startViewTransition(() => { setLang(newLang); applyTranslations(); });
  } else { setLang(newLang); applyTranslations(); }
}
if (langSwitch) langSwitch.addEventListener('click', toggleLang);
if (langSwitchMobile) langSwitchMobile.addEventListener('click', toggleLang);

// ============================================
// NAV — Scroll shadow
// ============================================
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 80 ? '0 1px 8px rgba(0,0,0,0.06)' : 'none';
  }, { passive: true });
}

// Smooth scroll anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) lenis.scrollTo(target, { offset: -80 });
  });
});

// ============================================
// HERO — Floating Particles
// ============================================
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container || window.innerWidth < 768) return;
  const count = 15;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 8 + 8) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(p);
  }
}

// ============================================
// HOW IT WORKS — Scroll Reveal
// ============================================
function initHowItWorksReveal() {
  const section = document.getElementById('howItWorks');
  if (!section) return;
  ScrollTrigger.create({
    trigger: section,
    start: 'top 78%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline();
      tl.from('.how-it-works-title', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' });
      tl.from('.step-item', {
        y: 40, opacity: 0, duration: 0.5, ease: 'power3.out',
        stagger: 0.15, clearProps: 'transform',
      }, '-=0.3');
      tl.from('.step-connector', {
        scaleX: 0, duration: 0.5, ease: 'power2.out',
        stagger: 0.15, transformOrigin: 'left center',
      }, '-=0.4');
    }
  });
}

// ============================================
// INIT
// ============================================
function init() {
  initHeroEntry();
  initHeroParticles();
  initNavScroll();
  initInterfacesReveal();
  initHowItWorksReveal();
  initBentoGlow();
  initFeaturesAnimation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else { init(); }

