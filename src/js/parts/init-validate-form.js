const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regNum = /^\d+$/;
const regString = /^[a-zA-Z-А-Яа-яЁё-]+$/;



let form = document.querySelector('.js-form');
let parentBlock = document.querySelector('.order-page');


if(form) {

    let formInputsReq = document.querySelectorAll('.required');


    function isValid(input, mess) {
        input.classList.remove('error');
        console.log(mess);
    }

    function notValid(input, mess) {
        input.classList.add('error');
        console.log(mess);
    }

    function validate(elem) {
        if(elem.classList.contains('required')) {
            if(elem.value.length < 2) {
                console.log(elem.value.length)
                notValid(elem, `${elem.name} - Требуется не менее 2 символов` );
                return false;
            } else if(elem.value.length > 20) {
                console.log(elem.value.length)
                notValid(elem, `${elem.name} - Превышено допустимое кол-во символов` );
                return false;
            } else if(elem.value === '') {
                notValid(elem, `${elem.name} - Поле не заполнено` );
                return false;
            } else {
                isValid(elem, `${elem.name} - OK`);
            }

            if(elem.classList.contains('js-string')) {
                if(!regString.test(elem.value)) {
                    notValid(elem, `${elem.name} - Не корректные данные - ожидается строка` );
                    return false;
                } else {
                    isValid(elem, `${elem.name} - OK`)
                }
            }

            if(elem.classList.contains('js-num')) {
                if(!regNum.test(elem.value)) {
                    notValid(elem, `${elem.name} - Не корректные данные - ожидается число` );
                    return false;
                } else {
                    isValid(elem, `${elem.name} - OK`)
                }
            }

            if(elem.classList.contains('js-email')) {
                if(!regEmail.test(elem.value)) {
                    notValid(elem, `${elem.name} - Не корректный email` );
                    return false;
                } else {
                    isValid(elem, `${elem.name} - OK`)
                }
            }
        }
    }

    function noReqValidate(elem) {
        if(elem.name === 'cpp' && elem.value) {
            if(!regNum.test(elem.value)) {
                notValid(elem, `${elem.name} - Не корректные данные - ожидается число` );
                return false;
            } else if(elem.value.length < 2) {
                notValid(elem, `${elem.name} - Требуется не менее 2 символов` );
                return false;
            } else if(elem.value.length > 20) {
                notValid(elem, `${elem.name} - Превышено допустимое кол-во символов` );
                return false;
            } else {
                isValid(elem, `${elem.name} - OK`);
            }
        }

        if(elem.name === 'ogrn' && elem.value) {
            if(!regNum.test(elem.value)) {
                notValid(elem, `${elem.name} - Не корректные данные - ожидается число` );
                return false;
            } else if(elem.value.length < 2) {
                notValid(elem, `${elem.name} - Требуется не менее 2 символов` );
                return false;
            } else if(elem.value.length > 20) {
                notValid(elem, `${elem.name} - Превышено допустимое кол-во символов` );
                return false;
            } else {
                isValid(elem, `${elem.name} - OK`);
            }
        }

        if(elem.name === 'promo' && elem.value) {
            if(elem.value.length < 2) {
                notValid(elem, `${elem.name} - Требуется не менее 2 символов` );
                return false;
            } else if(elem.value.length > 20) {
                notValid(elem, `${elem.name} - Превышено допустимое кол-во символов` );
                return false;
            } else {
                isValid(elem, `${elem.name} - OK`);
            }
        }
    }



    form.onsubmit = function (e) {
        e.preventDefault();

        let promo = document.querySelector('.field__text--promo');
        let formCheckboxField = document.querySelector('.field__checkbox');

        if(promo) {
            noReqValidate(promo);
        }

        if(!formCheckboxField.checked) {
            notValid(formCheckboxField, `Нужно отметить checkbox` );
            return false;
        } else {
            isValid(formCheckboxField);
        }


        if(parentBlock.classList.contains('js-individual-order')) {
            formInputsReq.forEach(input => {
                if(input.classList.contains('js-user')) {

                    if(parentBlock.classList.contains('courier')) {
                        if(!input.classList.contains('js-courier-field')) {
                            console.log(input)
                            validate(input)
                        }
                    } else if(parentBlock.classList.contains('point')) {
                        if(!input.classList.contains('js-point')) {
                            console.log(input)
                            validate(input)
                        }
                    } else {
                        validate(input)
                    }
                }
            });
        }



        if(parentBlock.classList.contains('js-law-order')) {

            let cpp = document.querySelector('.cpp');
            let ogrn = document.querySelector('.ogrn');


            formInputsReq.forEach(input => {
                if(input.classList.contains('js-law-field')) {
                    if(parentBlock.classList.contains('courier')) {
                        if(!input.classList.contains('js-courier-field')) {
                            console.log(input)
                            validate(input)
                        }
                    } else if(parentBlock.classList.contains('point')) {
                        if(!input.classList.contains('js-point')) {
                            console.log(input)
                            validate(input)
                        }
                    } else {
                        validate(input)
                    }
                }
            });

            if(cpp) {
                noReqValidate(cpp);
            }

            if(ogrn) {
                noReqValidate(ogrn);
            }
        }
    }





    // form.onsubmit = function (e) {
    //     e.preventDefault();

    //     let stateUser = parentBlock.classList.contains('js-individual-order');
    //     let stateLaw = parentBlock.classList.contains('js-law-order');
    //     let statePoint = parentBlock.classList.contains('point');
    //     let stateCourier = parentBlock.classList.contains('courier');



    //     let formInputsGeneral = document.querySelectorAll('.js-field-general');
    //     let formInputsLaw = document.querySelectorAll('.js-field-law');
    //     let formInputsAddress = document.querySelectorAll('.js-field-address');

    //     let formInputsPostcode = document.querySelector('.js-field-postcode');
    //     let formInputsName = document.querySelector('.js-field-name');


    //     // function validate(regex, value) {
    //     //     return regex.test(value)
    //     // }



    //     formInputsReq.forEach(input => {

    //         let lawField = input.classList.contains('js-law-field');
    //         let userField = input.classList.contains('js-user');
    //         let fieldEmail = input.classList.contains('js-email');

    //         // if(fieldEmail) {
    //         //     if(!validate(regEmail, input.value)) {
    //         //         notValid(input, `${input.name} - не валидный email` );
    //         //     }
    //         // }

    //         if(stateUser && !lawField) {
    //             if(input.value === '') {
    //                 notValid(input, `${input.name} - поле не должно быть пустым` );
    //             } else {
    //                 isValid(input);
    //             }
    //         }

    //         if(stateLaw && !userField) {
    //             if(input.value === '') {
    //                 notValid(input, `${input.name} - поле не должно быть пустым` );
    //             } else {
    //                 isValid(input);
    //             }
    //         }

    //         // if(!validate(regNum, input.value)) {
    //         //     notValid(input, `${input.name} - не число` );
    //         // } else {
    //         //     isValid(input, `${input.name} - валидно`);
    //         // }
    //     })

    //     // if(stateUser) {
    //     //     if(statePoint) {

    //     //     }
    //     // } else {
    //     //     console.log(stateLaw, 'stateLaw');

    //     //     if(statePoint) {
    //     //         console.log('stateLaw/statePoint');
    //     //     }
    //     // }



    //     // if(stateLaw) {
    //     // }



    //     // formInputsGeneral.forEach(input => {
    //     //     if(!validate(regNum, input.value)) {
    //     //         notValid(input, `${input.name} - не число` );
    //     //     } else {
    //     //         isValid(input, `${input.name} - валидно`);
    //     //     }
    //     // })
    // }
















    // let formInputsGeneral = document.querySelectorAll('.js-field-general');
    // let formInputsLaw = document.querySelectorAll('.js-field-law');
    // let formInputsAddress = document.querySelectorAll('.js-field-address');
    // let formInputsName = document.querySelector('.js-field-name');
    // let formInputsPostcode = document.querySelector('.js-field-postcode');

    // let formInputsNum = document.querySelectorAll('.js-input-num');
    // let formInputsEmail = document.querySelector('.js-input-email');

    // let formCheckboxField = document.querySelector('.field__checkbox');
    // let formCheckboxLabel = document.querySelector('.field__checkbox-label');

    // let allTextFields = document.querySelectorAll('.js-length-general');



    // // function validateEmail(email) {
    // //     console.log(email.value);
    // //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // //     return re.test(String(email).toLowerCase());
    // // }



    // function emptyFieldsList(fieldList) {
    //     fieldList.forEach(function (input) {
    //         if (input.value === '') {
    //             input.classList.add('error');
    //             console.log(input.name)
    //         } else {
    //             input.classList.remove('error');
    //         }
    //     });
    // }


    // function checkFieldsLength(fieldList) {
    //     fieldList.forEach(function (input) {
    //         if(input.value.length !== 0) {
    //             console.log(input.name, 'checkFieldsLength')
    //         }
    //         // if((input.value.length !== 0 && input.value.length < 2) || (input.value.length !== 0 && input.value.length > 10)) {
    //         //     input.classList.add('error');
    //         //     console.log(input.name, 'checkFieldsLength')
    //         //     console.log(input.name, input.value.length, 'checkFieldsLength')
    //         // } else {
    //         //     input.classList.remove('error');
    //         //     console.log(input.name, input.value.length, 'checkFieldsLength')
    //         // }
    //     });
    // }



    // form.onsubmit = function () {
        // let parentBlock = document.querySelector('.order-page');
        // let emailVal = formInputsEmail.value;

        // let userOrder = parentBlock.classList.contains('js-individual-order');
        // let lawOrder = parentBlock.classList.contains('js-law-order');
        // let deliveryPoint = parentBlock.classList.contains('point');
        // let deliveryCourier = parentBlock.classList.contains('courier');

        // let emptyFieldAddress = Array.from(formInputsAddress).filter(input => input.value === '');
        // let emptyFieldGeneral = Array.from(formInputsGeneral).filter(input => input.value === '');
        // let emptyFieldLaw = Array.from(formInputsLaw).filter(input => input.value === '');

        // let lengthFields = Array.from(allTextFields).filter(
        //     input => input.value.length < 2
        // );



        // console.log(emptyFieldGeneral.length, 'emptyFieldGeneralemptyFieldGeneralemptyFieldGeneral')
        // console.log(lengthFields.length, 'lengthFields.lengthlengthFields.length')


        // emptyFieldsList(formInputsGeneral);

        // formInputsNum.forEach(function (input) {
        //     if (isNaN(input.value)) {
        //         input.value = ''
        //         input.classList.add('error');
        //     } else {
        //         input.classList.remove('error');
        //     }
        // });



        // checkFieldsLength(allTextFields);


        // if(!deliveryPoint) {
        //     emptyFieldsList(formInputsAddress);
        // }

        // if(!deliveryPoint && !deliveryCourier) {
        //     if(formInputsPostcode.value === '') {
        //         formInputsPostcode.classList.add('error');
        //     } else {
        //         formInputsPostcode.classList.remove('error');
        //     }
        // }

        // if(userOrder) {
        //     if(formInputsName.value === '') {
        //         formInputsName.classList.add('error');
        //     } else {
        //         formInputsName.classList.remove('error');
        //     }
        // }

        // if(lawOrder) {
        //     emptyFieldsList(formInputsLaw);
        // }

        // if(userOrder) {
        //     if(deliveryPoint) {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             formInputsName.value === '' ||
        //             lengthFields.length !== 0
        //         ) {
        //             console.log('userOrder deliveryPoint fields are empty emptyFieldGeneral formInputsName lengthFields-2 lengthFields 10 ');
        //             return false;
        //         }
        //     } else if(deliveryCourier) {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             emptyFieldAddress.length !== 0 ||
        //             formInputsName.value === '' ||
        //             lengthFields.length !== 0
        //         ) {
        //             console.log('userOrder deliveryCourier fields are empty emptyFieldGeneral emptyFieldAddress formInputsName lengthFields-2 lengthFields 10');
        //             return false;
        //         }
        //     } else {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             emptyFieldAddress.length !== 0 ||
        //             formInputsName.value === '' ||
        //             formInputsPostcode.value === '' ||
        //             lengthFields.length !== 0
        //         ) {
        //             console.log('fields are empty emptyFieldGeneral emptyFieldAddress formInputsName formInputsPostcode lengthFields-2 lengthFields 10');
        //             return false;
        //         }
        //     }
        // }


        // if(lawOrder) {
        //     if(deliveryPoint) {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             emptyFieldLaw.length !== 0
        //         ) {
        //             console.log('lawOrder deliveryPoint fields are empty emptyFieldGeneral or emptyFieldLaw');
        //             return false;
        //         }
        //     } else if(deliveryCourier) {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             emptyFieldLaw.length !== 0 ||
        //             emptyFieldAddress.length !== 0
        //         ) {
        //             console.log('lawOrder deliveryCourier fields are empty emptyFieldGeneral or emptyFieldLaw emptyFieldAddress');
        //             return false;
        //         }
        //     } else {
        //         if (
        //             emptyFieldGeneral.length !== 0 ||
        //             emptyFieldLaw.length !== 0 ||
        //             emptyFieldAddress.length !== 0 ||
        //             formInputsPostcode.value === ''
        //         ) {
        //             console.log('fields are empty emptyFieldGeneral or emptyFieldLaw emptyFieldAddress formInputsPostcode');
        //             return false;
        //         }
        //     }
        // }


        // if(!validateEmail(emailVal)) {
        //     console.log('email not valid!');
        //     formInputsEmail.classList.add('error');
        //     return false;
        // } else {
        //     formInputsEmail.classList.remove('error');
        // }

        // if(!formCheckboxField.checked) {
        //     console.log('checkbox not checked');
        //     formCheckboxLabel.classList.add('error');
        //     return false;
        // } else {
        //     formCheckboxLabel.classList.remove('error');
        // }
    // }
}