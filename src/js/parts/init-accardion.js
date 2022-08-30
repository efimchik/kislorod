
if(document.querySelector('.products')) {
    let btnShowProduct = document.querySelector('.products__header .underline');
    let productList = document.querySelector('.products-list');


    //show/hide product list
    btnShowProduct.addEventListener('click', () => {
        let btnText = btnShowProduct.innerText;

        productList.classList.toggle('active');

        btnShowProduct.classList.toggle('active');

        btnText === 'Свернуть' ? btnShowProduct.innerText = 'Развернуть' : btnShowProduct.innerText = 'Свернуть';
    });
}
