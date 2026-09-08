//DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('.mobileToggle')
const navMenu = document.getElementById('.navMenu');
const contactForm = document.getElementById('.contactForm');
const footerLinks = document.querySelectorAll('.footer-column a[data-page]');
const heroButtons = document.querySelectorAll('.hero-buttons .btn[data-page]');

//Initialise current page
let currentPage = 'home';

// Function to navigate to a page
function navigateToPage(pageId) {
    //Check if page exists
    const targetPage = document.getElementbyId(pageId);
    if (!targetPage) {
        console.error('Page with id "£{pageId}" not found');
        return;
    }
}

//Hide current page
document.getElementById(currentPage).classList.remove('active');

