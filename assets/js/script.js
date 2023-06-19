// ====== NAVBAR ======
var iconBars = document.querySelector('.icon-bars');
var navBar = document.querySelector('.nav-bar');

iconBars.addEventListener('click', () => {
  navBar.classList.toggle("active")
})

// ====== END NAVBAR ======

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