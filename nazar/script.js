// Smooth Scroll Effect
document.querySelectorAll('a[href]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const fullscreenModal = document.getElementById("fullscreen-modal");
    const fullscreenImg = document.getElementById("fullscreen-img");
    const closeModal = document.getElementById("close-modal");
  
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        fullscreenImg.src = img.src; // Завантажуємо клікнуте зображення
        fullscreenModal.style.display = "flex"; // Показуємо модальне вікно
      });
    });
  
    closeModal.addEventListener("click", () => {
      fullscreenModal.style.display = "none"; // Закриваємо модальне вікно
    });
  
    fullscreenModal.addEventListener("click", (e) => {
      if (e.target === fullscreenModal) {
        fullscreenModal.style.display = "none"; // Закриваємо модальне вікно при кліку поза зображенням
      }
    });
  });
  