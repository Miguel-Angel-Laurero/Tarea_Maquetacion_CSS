document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const infocity = document.querySelector('.menu-toggle');
    //const navigation = document.getElementById('navigation');
    
    menuToggle.addEventListener('click', () => {
        infocity.classList.toggle('active');
        //navigation.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && !menuToggle.contains(e.target) && navigation.classList.contains('active')) {
            infocity.classList.remove('active');
            //navigation.classList.remove('active');
        }
    });

});