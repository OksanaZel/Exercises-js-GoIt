import products from './data/products.js'


  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const productNameEl = document.createElement('h2');
// productNameEl.textContent = product.name;
// productNameEl.classList.add('product__descr');

// const productDescrEl = document.createElement('p');
// productDescrEl.textContent = product.description;
// productDescrEl.classList.add('product__descr');

// const productPrice = document.createElement('p');
// productPrice.textContent = `Цена: ${product.price} кредитов`;

// productEl.append(productNameEl, productDescrEl, productPrice);




const makedProductCard = ({name, description, price}) => {
    
const productEl = document.createElement('article');
productEl.classList.add('product');

const productNameEl = document.createElement('h2');
productNameEl.textContent = name;
productNameEl.classList.add('product__descr');

const productDescrEl = document.createElement('p');
productDescrEl.textContent = description;
productDescrEl.classList.add('product__descr');

const productPrice = document.createElement('p');
productPrice.textContent = `Цена: ${price} кредитов`;

    productEl.append(productNameEl, productDescrEl, productPrice);
    return productEl;
}

// console.log(makedProductCard(products[0]));

const elements = products.map(makedProductCard)

const productsContainerEl = document.querySelector('.js-products');
productsContainerEl.append(...elements);