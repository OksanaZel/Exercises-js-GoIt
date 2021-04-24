/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */


/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('.page-title');
titleEl.textContent = 'Eto zagolovok';
console.log(titleEl);

// document.body.appendChild(titleEl);
// console.log(document.body);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imgEl = document.createElement('img');
console.log(imgEl);
imgEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imgEl.alt = 'valais-alpine-mountains-glacier';
imgEl.width = '320';
// document.body.appendChild(imgEl);

const heroEl = document.querySelector('.hero');
// console.log(heroEl);
heroEl.append(titleEl, imgEl);

/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);

navEl.insertBefore(navItemEl, navEl.firstElementChild);