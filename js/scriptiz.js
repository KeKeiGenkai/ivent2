const images = [
    'images/Danka.png', // Ссылка на первое изображение
    'images/Di.png',    // Ссылка на второе изображение
    'images/Dimedroll.png',
    'images/Liza.png',
    'images/Pensioner.png',
    'images/Polina.png',
    'images/smoj.png',
    'images/Stasik.png',
    'images/Varya.png'
];

// Получаем контейнер для изображений
const imageContainer = document.querySelector('.image-container');

// Очищаем контейнер перед добавлением изображений
imageContainer.innerHTML = ''; // Удаляем всё, что могло быть там раньше

// Сразу заполняем контейнер изображениями
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Фото ${index + 1}`;
    img.classList.add('image');
    if (index === 0) img.classList.add('active'); // Первое изображение делаем активным
    imageContainer.appendChild(img);
});

// Получаем изображения и стрелки
const imgElements = document.querySelectorAll('.image-container img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

// Функция для обновления карусели
function updateCarousel() {
    imgElements.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
}

// Обработчики для стрелок
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgElements.length) % imgElements.length;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgElements.length;
    updateCarousel();
});

// Инициализируем карусель
updateCarousel();
