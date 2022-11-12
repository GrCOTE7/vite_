export function index() {
  localStorage.clear();

  console.log('ok')

  let goBtnElt = document.getElementById('goElt')
  goBtnElt.addEventListener('click', (() => {
    
    console.log('clicked')
    
    // Req API
    
    localStorage.settings = 'PHP'
    localStorage.currentQ  = 0
    localStorage.limit  = 3
    
  }))

  setTimeout(() => {
    goBtnElt.click()
  }, 2000)
}
index()