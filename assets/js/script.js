// ====== NAVBAR ======
var iconBars = document.querySelector('.icon-bars');
var navBar = document.querySelector('.nav-bar');
var homeNavbar = document.querySelector('.homeNav');
var servicesNavbar = document.querySelector('.servicesNav');
var galeryNavbar = document.querySelector('.galeryNav');
var reviewsNavbar = document.querySelector('.reviewsNav');
var contactNavbar = document.querySelector('.contactNav');

iconBars.addEventListener('click', () => {
  navBar.classList.toggle("active")
});

homeNavbar.addEventListener('click', () => {
  navBar.classList.remove("active");
});

servicesNavbar.addEventListener('click', () => {
  navBar.classList.remove("active");
});

galeryNavbar.addEventListener('click', () => {
  navBar.classList.remove("active");
});

reviewsNavbar.addEventListener('click', () => {
  navBar.classList.remove("active");
});

contactNavbar.addEventListener('click', () => {
  navBar.classList.remove("active");
});
// ====== END NAVBAR ======

// ====== HOME ======
var btnHome = document.querySelector('.btn-home');

btnHome.addEventListener('click', () => {
  window.open("https://wa.me/9995445986");
})
// ====== END HOME ======

// ====== CONTACT ======
var btnContactWhats = document.querySelector('.contact-whats');
var btnContactEmail = document.querySelector('.contact-email');
var btnContactInsta = document.querySelector('.contact-insta');

btnContactWhats.addEventListener('click', () => {
  window.open("https://wa.me/9995445986");
});

btnContactEmail.addEventListener('click', () => {
  window.open("https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNfvfmJflPFBNBTlWxzqDdVCSWZKhPqlDsLfwkTnWvspwKHZJLSDbJxxwPGFQJNljhlv");
});

btnContactInsta.addEventListener('click', () => {
  window.open("https://www.instagram.com/beautysalonale_/?hl=es");
});
// ====== END CONTACT ======