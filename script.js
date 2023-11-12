let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Вызов функции nextImage() каждые 5 секунд (или другой интервал по вашему выбору)
setInterval(nextImage, 5000);

function callSeller() {
    // Ваш код для обработки действия по нажатию на кнопку "Позвонить"
    console.log('Calling seller...');
}

// Показать первое изображение при загрузке страницы
showImage(currentIndex);