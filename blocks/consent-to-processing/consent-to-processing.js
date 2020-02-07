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
