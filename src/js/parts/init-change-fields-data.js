if(document.querySelector('.order-box__recipient')) {
    let btnRecipient = document.querySelector('.order-box__recipient .underline');
    let parentBlock = document.querySelector('.order-page');

    let formInputsGeneral = document.querySelectorAll('.js-field-general');
    let formInputsLaw = document.querySelectorAll('.js-field-law');
    let formInputsAddress = document.querySelectorAll('.js-field-address');
    let formInputsName = document.querySelector('.js-field-name');
    let formInputsPostcode = document.querySelector('.js-field-postcode');


    function clearErrorsFields(fieldList) {

        fieldList.forEach(function (input) {
            input.classList.remove('error');
            input.value = '';
        });
    }

    btnRecipient.addEventListener('click', () => {
        clearErrorsFields(formInputsGeneral);
        clearErrorsFields(formInputsLaw);
        clearErrorsFields(formInputsAddress);

        formInputsName.classList.remove('error');
        formInputsName.value = '';

        formInputsPostcode.classList.remove('error');
        formInputsPostcode.value = '';


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