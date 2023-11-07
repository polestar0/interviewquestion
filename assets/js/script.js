/**
 * navbar toggle
 * 
 */

const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
            const toggleButton = faq.querySelector('.toggle-button');

            faq.addEventListener('click', () => {
                faq.classList.toggle('open');
                toggleButton.textContent = faq.classList.contains('open') ? ' ▲ ' : ' ▼ ';
            });
        });
  
'use strict';

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});


const sections = document.querySelectorAll('section[id]')

