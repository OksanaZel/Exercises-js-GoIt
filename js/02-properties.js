/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const magicBtn = document.querySelector('.js-magic-btn');


    const imgEl = document.querySelector('.hero__image');
    console.log(imgEl);
    console.log(imgEl.src);
    imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
    imgEl.alt = 'Это новый котик';
    
    const heroTitleEl = document.querySelector('.hero__title');
    console.log(heroTitleEl.textContent);
    heroTitleEl.textContent = 'Я новый котик';

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

console.log(imgEl.getAttribute('src'));
console.log(imgEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */

const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[2].dataset.action);
console.log(actions[2].getAttribute('data-action'));