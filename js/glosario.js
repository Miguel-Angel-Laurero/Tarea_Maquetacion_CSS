(function(){
  const searchInput = document.getElementById('search');
  const grid = document.getElementById('glossaryGrid');
  const cards = Array.from(grid.querySelectorAll('.card'));
  const catButtons = Array.from(document.querySelectorAll('.cat-btn'));

  // Debounce util
  function debounce(fn, wait=200){
    let t;
    return (...args)=>{
      clearTimeout(t);
      t = setTimeout(()=>fn.apply(this,args), wait);
    };
  }

  function normalize(str){
    return (str || '').toLowerCase().trim();
  }

  function applyFilter(){
    const q = normalize(searchInput.value);
    const activeCat = document.querySelector('.cat-btn.active')?.dataset.cat || 'all';

    cards.forEach(card=>{
      const name = normalize(card.dataset.name);
      const cat = card.dataset.category;
      const matchName = !q || name.includes(q);
      const matchCat = activeCat === 'all' || cat === activeCat;

      if(matchName && matchCat){
        card.style.display = '';
        // lazy load image real src if needed
        const img = card.querySelector('img.card-img');
        const dataSrc = img.getAttribute('data-src');
        if(dataSrc && img.src.indexOf(dataSrc) === -1){
          // preload then swap with fade
          const tmp = new Image();
          tmp.src = dataSrc;
          tmp.onload = ()=>{
            img.style.transition = 'opacity 300ms ease';
            img.style.opacity = '0';
            setTimeout(()=>{
              img.src = dataSrc;
              img.style.opacity = '1';
            }, 50);
          };
        }
      } else {
        card.style.display = 'none';
      }
    });
  }

  const debouncedApply = debounce(applyFilter, 180);
  searchInput.addEventListener('input', debouncedApply);

  catButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      catButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter();
    });
  });

  // Initial lazy load of visible items
  document.addEventListener('DOMContentLoaded', ()=>{
    applyFilter();
  });
})();
