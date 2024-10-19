// Mobile
function mobileMenu(menu) {
    menu.classList.toggle('open');
}

// Slide 
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("imgIntro");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Remove a classe active
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reseta para o primeiro slide
    slides[slideIndex - 1].classList.add("active"); // Adiciona a classe active ao slide atual
    setTimeout(showSlides, 3000); // Muda o slide a cada 3 segundos
}

function plusSlides(n) {
    slideIndex += n; // Adiciona ou subtrai da index do slide
    const slides = document.getElementsByClassName("imgIntro");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    showSlidesManually(slideIndex);
}

function showSlidesManually(index) {
    const slides = document.getElementsByClassName("imgIntro");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index - 1].classList.add("active");
}