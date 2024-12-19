const imageLinks = [
    '/images/Danka.png', // Ссылка на первое изображение
    '/images/Di.png', // Ссылка на второе изображение
    '/images/Dimedroll.png',
    '/images/Liza.png',
    '/images/Pensioner.png',
    '/images/Polina.png',
    '/images/smoj.png',
    '/images/Stasik.png',
    '/images/Varya.png',
    //'images/.png',
    // Ссылка на третье изображение
    // 'image4.jpg', // Вы можете временно закомментировать строки, чтобы исключить изображения
];

const imageContainer = document.querySelector('.image-container');

// Динамически добавляем изображения в контейнер
imageLinks.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Фото ${index + 1}`;
    if (index === 0) img.classList.add('active'); // Первое изображение делаем активным
    imageContainer.appendChild(img);
});

const images = document.querySelectorAll('.image-container img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

updateCarousel();
