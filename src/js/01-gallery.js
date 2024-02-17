// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Додатковий імпорт стилів
const ulElement = document.querySelector('.gallery');
ulElement.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // атрибут значення якого буде показано
  captionDelay: 250, // затримка перед тим як показувати текст
});

// Функція для створення розмітки
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

