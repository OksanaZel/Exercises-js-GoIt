const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
const navEl = document.querySelector('.site-nav');
const navItemEl = navEl.querySelector('.site-nav__item');
const navLinksEl = navEl.querySelectorAll('.site-nav__link');

console.log(navEl);
console.log(navItemEl);
console.log(navLinksEl);
})