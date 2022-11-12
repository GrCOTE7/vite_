export function quizz (){

document.getElementById('appElt').innerHTML = localStorage.settings
  
  
  setTimeout(() => {
    window.location = "index.html";
  }, 100000)
}
quizz()