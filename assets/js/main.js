(function(){
  // Mobile nav
  const burger = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile-panel]');

  if (burger && panel){
    burger.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    panel.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a){
        panel.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active nav link
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Lightbox (projects)
  const lb = document.querySelector('[data-lightbox]');
  const lbImg = document.querySelector('[data-lightbox-img]');
  const lbMeta = document.querySelector('[data-lightbox-meta]');
  const lbClose = document.querySelector('[data-lightbox-close]');

  if (lb && lbImg && lbClose){
    document.addEventListener('click', (e) => {
      const thumb = e.target.closest('[data-lightbox-open]');
      if (!thumb) return;

      const src = thumb.getAttribute('data-src');
      const label = thumb.getAttribute('data-label') || 'Project Photo';
      if (!src) return;

      lbImg.src = src;
      lbMeta.textContent = label;
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
    });

    const close = () => {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
      lbMeta.textContent = '';
    };

    lbClose.addEventListener('click', close);

    lb.addEventListener('click', (e) => {
      if (e.target === lb) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('open')) close();
    });
  }
})();
