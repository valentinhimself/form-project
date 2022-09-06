const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector('button');
const errorSpan = document.querySelector('.confirm-password__span');

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
    if (confirmPassword.value.length>=password.value.length) {
        if (confirmPassword.value != password.value) {
            errorSpan.classList.remove('hidden');
        }
        else {
            errorSpan.classList.add('hidden');
        }
    }
});

