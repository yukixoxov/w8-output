
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('signIn');

button.addEventListener('click', () => {
    const inputEmail = email.value;
    const inputPassword = password.value;
    localStorage.setItem('email', inputEmail);
    localStorage.setItem('password', inputPassword);
});

email.addEventListener('click', () => {
    const savedEmail = localStorage.getItem('email');
    email.value = savedEmail;
});

password.addEventListener('click', () => {
    const savedPassword = localStorage.getItem('password');
    password.value = savedPassword;
});
