import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.mjs';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true
});

document.getElementById("appointment-button").addEventListener("click", function() {
    const popup = document.getElementById("popupForm");
    popup.style.display = "block";
});

// Дополнительно: закрытие popup при клике вне формы
document.addEventListener('click', function(event) {
    const popup = document.getElementById("popupForm");
    const button = document.getElementById("appointment-button");
    
    if (popup.style.display === 'block' && 
        !popup.contains(event.target) && 
        !button.contains(event.target)) {
        popup.style.display = 'none';
    }
});

// Закрытие по нажатию ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById("popupForm").style.display = 'none';
    }
});