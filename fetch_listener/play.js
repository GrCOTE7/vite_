export function quizz() {

  document.getElementById('appElt').innerHTML = 'Affiche question ' + localStorage.currentQ

  let validateBtnElt = document.getElementById('validateBtnElt')

  validateBtnElt.addEventListener('click', ((e) => {
    e.preventDefault()
    // Analyy des réponses

    //Q suivante
    localStorage.currentQ++

    console.log('clicked')

    if (localStorage.currentQ >= localStorage.limit) {
      window.location = "score.html";
    } else {
      window.location = "play.html";
    }


  }))

  // setTimeout(() => {
  //   window.location = "index.html";
  // }, 10000)
}
quizz()