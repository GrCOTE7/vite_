let btnElt = document.getElementById('btn-nav-js')
let navElt = document.getElementById('nav-nav-js')

btnElt.onclick = () => {
  navElt.classList.toggle('w-0')
  navElt.classList.toggle('p-0')
  btnElt.classList.toggle('rotate-180')
}



