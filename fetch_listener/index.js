export function index() {
  localStorage.clear();

  console.log('ok')

  let goBtnElt = document.getElementById('goElt')
  goBtnElt.addEventListener('click', (() => {
    console.log('clicked')
    localStorage.settings = 'PHP'
  }))

  // setTimeout(() => {
  //   goBtnElt.click()
  // }, 2000)
}
index()