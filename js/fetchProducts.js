const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) ?? [];
};

const updateCartCount = () => {
  const newCart = getCart();
  const cartCount = document.querySelector('.cart-count');
  const cartCountMobile = document.querySelector('.cart-count-mobile');

  cartCount.style.display = 'flex';
  cartCountMobile.style.display = 'flex';
  cartCount.innerHTML = newCart.length;
  cartCountMobile.innerHTML = newCart.length;
};

const checkCartInitial = () => {
  const cart = getCart();
  if (cart.length > 0) {
    updateCartCount();
  }
};
checkCartInitial();

const appendProductsToDom = (productListContainer, product) => {
  const productItem = `
      <div class="product swiper-slide ">
      <img
        src="${product.img}"
        alt="product"
        class="image"
      />
      <div class="rating">
        <span class="stars">
          <img src="./assets/icons/star.svg" alt="" />
          ${product.rating}
        </span>
        <span class="comments"> (${product.comment} yorum) </span>
      </div>
      <span class="code">${product.code}</span>
      <span class="name">${product.title}</span>
      <h4 class="price">₺${product.price}</h4>
      <span class="shipping-today ${
        product.samedayshipping && 'show'
      }"> BUGUN KARGODA </span>
      <button class="add-to-cart" data-productId="${
        product.code
      }" onclick="addToCart('${product.code}')">
        <span class="icon">
          <img src="./assets/icons/exchange.svg" width="16px" />
        </span>
        <span class="text"> SEPETE EKLE </span>
      </button>
    </div>
      `;
  productListContainer.innerHTML += productItem;
};

const addToCart = (productCode) => {
  let cart = getCart();
  cart.push(productCode);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  vNotify.success({
    text: 'Ürün sepete eklendi',
    showClose: true,
  });
};

const relatedProductList = document.querySelector('.product-list.related');
const bestSellerProductList = document.querySelector('.best-seller-swiper');

fetch('../data/relatedProducts.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => appendProductsToDom(relatedProductList, product));
  });

fetch('../data/bestSeller.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) =>
      appendProductsToDom(bestSellerProductList, product)
    );
  });
