let btnNavElt = document.getElementById('btnNavElt')
let navNavElt = document.getElementById('navNavElt')

btnNavElt.classList.toggle('rotate-180')
// btnNavElt.classList.toggle('rotate-180')


btnNavElt.onclick = (() => {
  btnNavElt.classList.toggle('rotate-180')
  // navNavElt.classList.toggle('w-0')
  navNavElt.classList.toggle('w-32')
  navNavElt.classList.toggle('p-5')
})
