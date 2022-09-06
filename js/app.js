const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector('button');
const errorSpan = document.querySelector('.confirm-password__span');
const passwordSpan = document.querySelector('.password__span')

function isPasswordCorrectLength() {
    return password.value.length>5 && password.value.length<13;
}

function toggleConfirmPasswordHidden() {
    if (confirmPassword.value.length>=password.value.length) {
        if (confirmPassword.value != password.value) {
            errorSpan.classList.remove('hidden');
        }
        else {
            errorSpan.classList.add('hidden');
        }
    }
}

button.addEventListener('click', (e)=>{
    if (password.value.length>5 && confirmPassword.value.length>5) {
        if (confirmPassword.value != password.value) {
            e.preventDefault();
            errorSpan.classList.remove('hidden');
        }
        else {
            errorSpan.classList.add('hidden');
        }
    }

})
confirmPassword.addEventListener("keyup", () => {
    if (isPasswordCorrectLength() == false) {
        passwordSpan.classList.remove ('hidden');
    }

    else {
        passwordSpan.classList.add ('hidden');
    }
    toggleConfirmPasswordHidden();
});

confirmPassword.addEventListener("click", () => {
    if (isPasswordCorrectLength() == false && password.value !="") {
        passwordSpan.classList.remove ('hidden');
    }

    else {
        passwordSpan.classList.add ('hidden');
    }
});

password.addEventListener ('keyup', () => {

    !isPasswordCorrectLength() && confirmPassword.value.length > 0 ? passwordSpan.classList.remove ('hidden') 
    : passwordSpan.classList.add ('hidden');
})