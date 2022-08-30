if(document.querySelector('.order-box__recipient')) {
    let btnRecipient = document.querySelector('.order-box__recipient .underline');
    let parentBlock = document.querySelector('.order-page');



    function clearErrorsFields(fieldList) {
        fieldList.forEach(function (input) {
            input.value = '';
            input.classList.remove('error');
        });
    }

    btnRecipient.addEventListener('click', () => {
        let formInputsText = document.querySelectorAll('.field__text');
        clearErrorsFields(formInputsText);


        if(parentBlock.classList.contains('js-individual-order')) {
            parentBlock.classList.remove('js-individual-order');
            parentBlock.classList.add('js-law-order');
            btnRecipient.innerText = 'Физическое лицо';
        } else {
            parentBlock.classList.remove('js-law-order');
            parentBlock.classList.add('js-individual-order');
            btnRecipient.innerText = 'Юридическое лицо';
        }
    });
}