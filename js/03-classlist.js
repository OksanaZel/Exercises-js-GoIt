const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);

// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');
// navEl.classList.toggle('qwerty');
// navEl.classList.replace('qwerty', 'super-cool');
// console.log(navEl.classList.contains('qwerty'));

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(`.site-nav__link[href='${currentPageUrl}']`);
console.log(linkEl);

linkEl.classList.add('site-nav__link--current');
