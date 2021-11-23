let formFirstName = document.querySelector('#firstName');
let formLastName = document.querySelector('#lastName');
let formPassword = document.querySelector('#password');
let formConfirmPassword = document.querySelector('#confirmPassword');
let formGenre = document.querySelector('#form__genre');
let formEmail = document.querySelector('#email');
let formFone = document.querySelector('#fone');
let formcheckbox = document.querySelector('#checkbox');
let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //Aqui tem um preventDefault para parar de executa ao carregar a página

    verificarDados();
});

function verificarDados() {
    // Pegar valores
    const firstNameValue = formFirstName.value.trim()
    const lastNameValue = formLastName.value.trim()
    const passwordeValue = formPassword.value.trim()
    const confirmPasswordValue = formConfirmPassword.value.trim()
    const genreValue = formGenre.value
    const emailValue = formEmail.value
    const foneValue = formFone.value



    if (firstNameValue === '') {
        jogarErro(formFirstName);
    }else{
        jogarSucesso(formFirstName);
    }

    if (lastNameValue === '') {
        jogarErro(formLastName);
    }else{
        jogarSucesso(formLastName);
    }

    if (passwordeValue === '') {
        jogarErro(formPassword);
    }else{
        jogarSucesso(formPassword);
    }

    if (confirmPasswordValue === '') {
        jogarErro(formConfirmPassword);
    }else if(passwordeValue !== confirmPasswordValue){
        jogarErro(formConfirmPassword);
    }else{
        jogarSucesso(formConfirmPassword);
    }

    if (genreValue === '') {
        formGenre.style.borderColor = '#e74c3c'
    }else{
        formGenre.style.borderColor = '#2ecc71'
    }

    if (emailValue === '') {
        jogarErro(formEmail);
    }else if (!isEmail(emailValue)) {
        jogarErro(formEmail);
    }else{
        jogarSucesso(formEmail);
    }

    if (foneValue === '') {
        jogarErro(formFone);
    }else if(isNaN(foneValue)){
        jogarErro(formFone);
    }else if(foneValue.length < 8){
        jogarErro(formFone);
    }else{
        jogarSucesso(formFone);
    }

    
    if (!formcheckbox.checked) {
        let textError = document.querySelector('#error__check');
        let textTermos = document.querySelector('label[for="checkbox"]');
        textError.style.visibility = 'visible';
        textTermos.style.color = '#e74c3c';
    }else{
        let textError = document.querySelector('#error__check');
        let textTermos = document.querySelector('label[for="checkbox"]');
        textError.style.visibility = 'hidden';
        textTermos.style.color = '#0B4870';
    }
    
}

function jogarErro(input) {
    // Já deixa como quiser a classe
    input.className = 'form__input error';
}

function jogarSucesso(input) {
    input.className = 'form__input sucess';
}
function isEmail(email) {
    // isso é um regex q veriica o email
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}