// SubSage — Custom Cursor
// Hides default cursor, replaces with animated dot that morphs on interactive elements
// Disabled on mobile/touch devices

export function initCursor() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);
  document.body.classList.add('has-custom-cursor');

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow with lerp
  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    dotX += (mouseX - dotX) * 0.6;
    dotY += (mouseY - dotY) * 0.6;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // State changes on interactive elements
  const interactiveSelectors = 'a, button, [role="button"], .magnetic-btn, .install-tab, .tab-btn, .ss-tab-btn, .ss-theme-btn, .lang-switch';

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      cursor.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      cursor.classList.remove('cursor-hover');
    }
  });

  // Text cursor state
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('p, span, h1, h2, h3, li') && !e.target.closest(interactiveSelectors)) {
      cursor.classList.add('cursor-text');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('p, span, h1, h2, h3, li')) {
      cursor.classList.remove('cursor-text');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
  });
}
