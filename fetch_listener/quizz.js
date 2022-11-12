export function quizz() {

  document.getElementById('appElt').innerHTML = localStorage.settings

  localStorage.currentQ = 1
  localStorage.limit = 3
  setTimeout(() => {
    window.location = "play.html";
  }, 10000)
}
quizz()