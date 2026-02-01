// FADE-IN
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.lightbox .close');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption || img.alt;
  });
});
closeBtn.addEventListener('click', () => { lightbox.style.display = "none"; });
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display = "none"; });

// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');
});
