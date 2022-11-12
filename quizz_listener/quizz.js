export function quizz() {

  document.getElementById('settingsElt').innerHTML = localStorage.settings


  document.getElementById('appElt').innerHTML = 'Affiche question ' + localStorage.currentQ

  let validateBtnElt = document.getElementById('validateBtnElt')

  validateBtnElt.addEventListener('click', ((e) => {
    // e.preventDefault()
    // Analyse des réponses

    //Q suivante
    localStorage.currentQ++

    console.log('clicked')

    if (localStorage.currentQ >= localStorage.limit) {
      window.location = "score.html";
    } else {
      window.location = "quizz.html";
    }


  }))

















  // setTimeout(() => {
  //   window.location = "play.html";
  // }, 10000)
}
quizz()