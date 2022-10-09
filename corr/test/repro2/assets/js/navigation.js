let btnElt = document.getElementById('btn-nav-js');
let navElt = document.getElementById('nav-nav-js');

console.log(btnElt)

btnElt.onclick = () =>{
  navElt.classList.toggle('w-0');
  navElt.classList.toggle('p-0');
  btnElt.firstElementChild.classList.toggle('rotate-180');
}