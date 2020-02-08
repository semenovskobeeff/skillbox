let form = document.querySelector('.form'),
formButton = form.querySelector('.form .button'),
inputName = form.querySelector('.input-name'),
inputPhone = form.querySelector('.input-phone'),
inputMail = form.querySelector('.input-mail'),
formInputs = form.querySelectorAll('.form__input');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let a = 0;

    for (let i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].value) {
            form[i].classList.add('form__input_error');
            a++;
        } else {
            form[i].classList.remove('form__input_error');
        }
    }

    function validate() {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let address = inputMail.value;
        let error;

        if (reg.test(address) == false) {
            inputMail.classList.add('form__input_error');
            error = false;
            return error;
        } else {
            error = true;
        }

        if ((error == true) && (a == 0)) {
            form.submit();
        }
    }

    validate();

});
