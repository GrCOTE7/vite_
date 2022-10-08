let buttonElement = document.getElementById('button-nav-js');
let navElement = document.getElementById('nav-nav-js');

buttonElement.onclick = () => {
    navElement.classList.toggle('w-0');
    navElement.classList.toggle('p-0');
    buttonElement.firstElementChild.classList.toggle('rotate-180');
};


