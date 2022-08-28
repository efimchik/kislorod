export function thousand(obj) {
    obj.forEach(function(el) {
        let result = el.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        el.innerText = result;
    });
}

let priceValue = document.querySelectorAll('.js-price-val');

thousand(priceValue);