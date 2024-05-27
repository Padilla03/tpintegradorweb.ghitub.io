document.addEventListener('DOMContentLoaded', function() {
    const carrouselImages = document.querySelector('.carrousel-images');
    const images = carrouselImages.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    document.querySelector('.carrousel-button.prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarrousel();
    });

    document.querySelector('.carrousel-button.next').addEventListener('click', function() {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarrousel();
    });

    function updateCarrousel() {
        const offset = -currentIndex * 100;
        carrouselImages.style.transform = `translateX(${offset}%)`;
    }
});

