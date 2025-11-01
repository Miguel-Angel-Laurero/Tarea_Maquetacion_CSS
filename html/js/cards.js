document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.getElementById('navigation');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && !menuToggle.contains(e.target) && navigation.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');
        }
    });

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