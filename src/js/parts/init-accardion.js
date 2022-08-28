
if(document.querySelector('.products')) {
    let btnShowProduct = document.querySelector('.products__header .underline');
    let productList = document.querySelector('.products-list');


    //get height product list
    function heigthProdectList() {
        let heightList = productList.scrollHeight;
        productList.style.maxHeight =  heightList + "px";
    }

    heigthProdectList();

    window.addEventListener('resize', function(event) {
        heigthProdectList();
    }, true);


    //show/hide product list
    btnShowProduct.addEventListener('click', () => {
        let btnText = btnShowProduct.innerText;

        productList.classList.toggle('active');

        if(productList.style.maxHeight) {
            productList.style.maxHeight = null;
        } else {
            productList.style.maxHeight = productList.scrollHeight + "px";
        }

        btnShowProduct.classList.toggle('active');

        btnText === 'Свернуть' ? btnShowProduct.innerText = 'Развернуть' : btnShowProduct.innerText = 'Свернуть';
    });
}
