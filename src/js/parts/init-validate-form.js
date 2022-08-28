
let form = document.querySelector('.js-form');

if(form) {
    let formInputsGeneral = document.querySelectorAll('.js-field-general');
    let formInputsLaw = document.querySelectorAll('.js-field-law');
    let formInputsAddress = document.querySelectorAll('.js-field-address');
    let formInputsName = document.querySelector('.js-field-name');
    let formInputsPostcode = document.querySelector('.js-field-postcode');

    let formInputsNum = document.querySelectorAll('.js-input-num');
    let formInputsEmail = document.querySelector('.js-input-email');



    function validateEmail(email) {
        console.log(email.value);
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



    function emptyFieldsList(fieldList) {
        fieldList.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return fieldList;
    }



    form.onsubmit = function () {
        let parentBlock = document.querySelector('.order-page');
        let emailVal = formInputsEmail.value;

        let userOrder = parentBlock.classList.contains('js-individual-order');
        let lawOrder = parentBlock.classList.contains('js-law-order');
        let deliveryPoint = parentBlock.classList.contains('point');
        let deliveryCourier = parentBlock.classList.contains('courier');

        let emptyFieldAddress = Array.from(formInputsAddress).filter(input => input.value === '');
        let emptyFieldGeneral = Array.from(formInputsGeneral).filter(input => input.value === '');
        let emptyFieldLaw = Array.from(formInputsLaw).filter(input => input.value === '');


        emptyFieldsList(formInputsGeneral);

        formInputsNum.forEach(function (input) {
            if (isNaN(input.value)) {
                input.value = ''
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });


        if(!deliveryPoint) {
            emptyFieldsList(formInputsAddress);
        }

        if(!deliveryPoint && !deliveryCourier) {
            if(formInputsPostcode.value === '') {
                formInputsPostcode.classList.add('error');
            } else {
                formInputsPostcode.classList.remove('error');
            }
        }

        if(userOrder) {
            if(formInputsName.value === '') {
                formInputsName.classList.add('error');
            } else {
                formInputsName.classList.remove('error');
            }
        }

        if(lawOrder) {
            emptyFieldsList(formInputsLaw);
        }


        if(userOrder) {
            if(deliveryPoint) {
                if (emptyFieldGeneral.length !== 0 || formInputsName.value === '') {
                    console.log('fields are empty general or name!');
                    return false;
                }
            } else if(deliveryCourier) {
                if (emptyFieldGeneral.length !== 0 || emptyFieldAddress.length !== 0 || formInputsName.value === '') {
                    console.log('fields are empty general or name!');
                    return false;
                }
            } else {
                if (emptyFieldGeneral.length !== 0 || emptyFieldAddress.length !== 0 || formInputsName.value === '' || formInputsPostcode.value === '') {
                    console.log('fields are empty general or name!');
                    return false;
                }
            }
        }


        if(lawOrder) {
            if(deliveryPoint) {
                if (emptyFieldGeneral.length !== 0 || emptyFieldLaw.length !== 0) {
                    console.log('fields are empty general or name!');
                    return false;
                }
            } else if(deliveryCourier) {
                if (emptyFieldGeneral.length !== 0 || emptyFieldLaw.length !== 0 || emptyFieldAddress.length !== 0) {
                    console.log('fields are empty general or name!');
                    return false;
                }
            } else {
                if (emptyFieldGeneral.length !== 0 || emptyFieldLaw.length !== 0 || emptyFieldAddress.length !== 0 || formInputsPostcode.value === '') {
                    console.log('fields are empty general or name!');
                    return false;
                }
            }
        }


        if(!validateEmail(emailVal)) {
            console.log('email not valid!');
            formInputsEmail.classList.add('error');
            return false;
        } else {
            formInputsEmail.classList.remove('error');
        }
    }
}