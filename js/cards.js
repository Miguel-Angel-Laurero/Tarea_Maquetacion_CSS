document.addEventListener('DOMContentLoaded', () => {
    // Card functionality (existing code)
    const cards = document.querySelectorAll('.card');

    // Preload alternate images
    cards.forEach(card => {
        const img = card.querySelector('.card-img');
        if (img && img.dataset.alt) {
            const preloadImg = new Image();
            preloadImg.src = img.dataset.alt;
        }
    });

    // Handle hover events
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('.card-img');
            if (img && img.dataset.alt) {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = img.dataset.alt;
                    img.style.opacity = '1';
                }, 175);
            }
        });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('.card-img');
            if (img && img.dataset.alt) {
                img.style.opacity = '0';
                setTimeout(() => {
                    //img.src = img.dataset.alt.replace('peppo.jpg', 'incognita.jpg');
                    img.style.opacity = '1';
                }, 175);
            }
        });
    });
});