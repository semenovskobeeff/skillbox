'use strict';

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.phone-mask'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });

    });

let label = document.querySelector('.consent-to-processing__label'),
    checkbox = document.querySelector('.consent-to-processing__checkbox'),
    checkboxInput = document.querySelector('.consent-to-processing__input');

label.addEventListener('click', function(event) {
    if (checkboxInput.hasAttribute('checked')) {
        checkboxInput.removeAttribute('checked');
        checkbox.classList.remove('consent-to-processing__checkbox_checked');
    } else {
        checkboxInput.setAttribute('checked', 'checked');
        checkbox.classList.add('consent-to-processing__checkbox_checked');
    }
});

checkbox.addEventListener('click', function(event) {
    if (checkboxInput.hasAttribute('checked')) {
        checkboxInput.removeAttribute('checked');
        checkbox.classList.remove('consent-to-processing__checkbox_checked');
    } else {
        checkboxInput.setAttribute('checked', 'checked');
        checkbox.classList.add('consent-to-processing__checkbox_checked');
    }
});

let form = document.querySelector('.form'),
formButton = form.querySelector('.form .button'),
inputName = form.querySelector('.input-name'),
inputPhone = form.querySelector('.input-phone'),
inputMail = form.querySelector('.input-mail'),
formInputs = form.querySelectorAll('.form__input');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    for (let i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].value) {
            form[i].classList.add('form__input_error');
        } else {
            form[i].classList.remove('form__input_error');
        }
    }

    function validate() {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let address = inputMail.value;

        if(reg.test(address) == false) {
            inputMail.classList.add('form__input_error');
            return false;
        }
    }

    validate();

});
