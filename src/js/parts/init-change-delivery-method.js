if(document.querySelectorAll('.method-item')) {
    //get parent page
    let parentBlock = document.querySelector('.order-page');

     //get all delivery items
    let deliveryItems = document.querySelectorAll('.method-item');

     //get default delivery price element
    let defaultDeliveryPrice = document.querySelector('.method-item.active .js-price-val');

    //get basket delivery element
    let deliveryBasket = document.querySelector('.js-delivery');

    //get basket product summ element
    let productsSum = document.querySelector('.js-product-sum');

    //get basket total summ element
    let productsTotal = document.querySelector('.js-total-sum');

    //basket total summ function
    function getTotalSumm(productSum, deliveryPrice) {
        let result = parseInt(productSum.innerText.replace(/\s/g, "")) + parseInt(deliveryPrice.innerText.replace(/\s/g, ""));
        return result  = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    // set default delivery value
    deliveryBasket.innerText = defaultDeliveryPrice.innerText;

    // set default total basket sum
    productsTotal.innerText = getTotalSumm(productsSum, defaultDeliveryPrice);


    deliveryItems.forEach(el => {

        el.addEventListener('click', function() {

            for(let i = 0; i < deliveryItems.length; i++) {
                deliveryItems[i].classList.remove('active');
                this.classList.add('active');

                if(this.classList.contains('js-courier')) {
                    parentBlock.classList.remove('point');
                    parentBlock.classList.add('courier');
                } else if(this.classList.contains('js-point')) {
                    parentBlock.classList.remove('courier');
                    parentBlock.classList.add('point');
                } else {
                    parentBlock.classList.remove('courier');
                    parentBlock.classList.remove('point');
                }
            }

            let curentMethodPrice = el.querySelector('.method-item__price-value');
            deliveryBasket.innerText = curentMethodPrice.innerText;

            if(isNaN(parseInt(curentMethodPrice.innerText))) {
                productsTotal.innerText = productsSum.innerText;
            } else {
                productsTotal.innerText = getTotalSumm(productsSum, curentMethodPrice);
            }
        });
    });
}