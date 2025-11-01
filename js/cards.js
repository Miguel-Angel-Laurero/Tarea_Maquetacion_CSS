document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.card-content');

  function preload(src) {
    if (!src) return;
    const i = new Image();
    i.src = src;
  }

  containers.forEach(container => {
    const img = container.querySelector('.card-img');
    if (!img) return;

    const origSrc = img.getAttribute('src');
    const altSrc = img.dataset.alt;

    // Preload both
    preload(origSrc);
    preload(altSrc);

    // Helper to swap with fade
    function fadeTo(newSrc) {
      if (!newSrc) return;
      // preload then swap
      const pre = new Image();
      pre.src = newSrc;
      pre.onload = () => {
        img.style.transition = 'opacity 0.28s ease';
        img.style.opacity = '0';
        // after fade-out, change src and fade-in
        setTimeout(() => {
          img.src = newSrc;
          img.style.opacity = '1';
        }, 300);
      };
    }

    container.addEventListener('mouseenter', () => {
      if (altSrc) fadeTo(altSrc);
    });
    container.addEventListener('mouseleave', () => {
      fadeTo(origSrc);
    });

    // optional touch/click toggle for mobile
    let toggled = false;
    container.addEventListener('click', (e) => {
      if (!altSrc) return;
      toggled = !toggled;
      fadeTo(toggled ? altSrc : origSrc);
    });
  });
});
