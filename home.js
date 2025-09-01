
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    if (slides.length > 0) {
        showSlide(currentSlide); 
        setInterval(nextSlide, 7000); 
    }
});