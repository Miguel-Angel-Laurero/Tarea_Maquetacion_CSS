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

});