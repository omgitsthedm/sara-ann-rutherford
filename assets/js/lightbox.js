(() => {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const img = lb.querySelector('.lightbox__img');
  const title = lb.querySelector('.lb__title');
  const status = lb.querySelector('.lb__status');
  const medium = lb.querySelector('.lb__medium');
  const size = lb.querySelector('.lb__size');
  const price = lb.querySelector('.lb__price');
  const emailBtn = lb.querySelector('#lbEmail');

  let lastFocus = null;

  const open = (art) => {
    lastFocus = document.activeElement;

    img.src = art.img;
    img.alt = art.alt || art.title || 'Artwork';

    title.textContent = art.title || '';
    status.textContent = art.status || '';
    medium.textContent = art.medium || '';
    size.textContent = art.size || '';

    const p = art.status && art.status.toLowerCase() === 'sold' ? 'Sold' : (art.price || '');
    price.textContent = p;

    const subject = encodeURIComponent(`Artwork inquiry: ${art.title || ''}`);
    const body = encodeURIComponent(`Hi Sara,\n\nI'm interested in: ${art.title || ''}\nSize: ${art.size || ''}\n\nMy name: \nMy city: \nQuestions: \n\nThank you!`);
    emailBtn.href = `mailto:${(art.email || '').trim() || document.body.dataset.email || ''}?subject=${subject}&body=${body}`;

    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');

    // focus close button for keyboard users
    const closeBtn = lb.querySelector('[data-lb-close]');
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    img.src = '';
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  lb.addEventListener('click', (e) => {
    if (e.target.matches('[data-lb-close]')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) close();
  });

  document.querySelectorAll('.art-card[data-art]').forEach((btn) => {
    btn.addEventListener('click', () => {
      try {
        const art = JSON.parse(btn.getAttribute('data-art'));
        art.email = document.body.dataset.email || '';
        open(art);
      } catch (err) {
        console.warn('Invalid art data', err);
      }
    });
  });
})();
