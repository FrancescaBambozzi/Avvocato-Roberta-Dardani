/* COOKIES ALERT LOGIC */
document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Check if the user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    // When the user clicks the accept button
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
});

/* HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
});