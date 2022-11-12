import '/styles.css'
localStorage.clear();

console.log('ok')

let goBtnElt = document.getElementById('goElt')
goBtnElt.addEventListener('click', (() => {
  console.log('clicked')
  localStorage.settings =1
}))

setTimeout(()=>{
  goBtnElt.click()
}, 2000)