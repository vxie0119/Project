
const container = document.getElementsById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementsById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});