// import { thousand } from './init-thousand-num.js';

if(document.querySelector('.products')) {

    function summCouter(countNum, elemVal) {
        let labelResult = countNum * elemVal.replace(/\s/g, "");
        return labelResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function addHandlers(count) {
        let minus = count.querySelector(".counter__btn--minus");
        let plus = count.querySelector(".counter__btn--plus");
        let number = count.querySelector(".counter__field");
        let labelBox = count.querySelector(".counter__label");

        let produdtPriceValue = count.querySelector(".products-list__item-price-new .products-list__item-price-value");
        let counterPriceValue = count.querySelector(".counter__label-value");


        plus.addEventListener("click", function() {
            number.value++;
            counterPriceValue.innerText = summCouter(number.value, produdtPriceValue.innerText);
            if(number.value > 1) {
                labelBox.classList.add('active');
            }
        });

        minus.addEventListener("click", function() {
            number.value--;
            counterPriceValue.innerText = summCouter(number.value, produdtPriceValue.innerText);
            if(number.value <= 1) {
                number.value = 1;
                labelBox.classList.remove('active');
            }
        });
    }

    let counts = document.querySelectorAll(".products-list__item");
    counts.forEach(addHandlers);

}