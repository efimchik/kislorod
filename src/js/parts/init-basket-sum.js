if(document.querySelector('.basket-stiky')) {
    let basketItemsPrice = document.querySelectorAll('.basket-stiky__list-price-value');
    let productsSum = document.querySelector('.js-product-sum');

    let result = [];

    basketItemsPrice.forEach(el => {
        result.push(Number(el.innerText.replace(/\s/g, "")));
    })



    result = result.reduce(function(sum, el) {
        return sum + el;
    });

    productsSum.innerText = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}