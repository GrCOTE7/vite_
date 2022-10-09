let btnElement = document.getElementById('btn-nav-js');
let navElement = document.getElementById('nav-nav-js');

btnElement.onclick = () => {
  navElement.classList.toggle('w-0');
  navElement.classList.toggle('p-0');
  btnElement.firstElementChild.classList.toggle('rotate-180');
};