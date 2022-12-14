"use strict";
let fetchData = async (page) => {
  return fetch(page)
    .then((response) => {
      return response.text()
    })
}

let navLinksElts = document.getElementsByClassName('link-js')
let dataElt = document.getElementById('data-js')
let myPElt = document.getElementById('myPElt')

for (let element of navLinksElts) {

  element.onclick = async (event) => {
    let elt = event.target
    let page = elt.getAttribute('data-page')
    let data = await fetchData(page + '.html')

    for (let resetColor of navLinksElts) {
      resetColor.style.color = 'black'
    }
    element.style.color = 'blue'
    
    myPElt.innerHTML = (page+'').charAt(0).toUpperCase()+page.substr(1);

    dataElt.innerHTML = data
  }
}

// console.log(
//   (fetch(mapage).then(
//     (response) => { return response.text() }
//   )).innerHTML
// );

// let response = await fetch('courses.html')

// if (response.ok) {
//   let content = await response.text()
//   // console.log(content)
// } else {
//   // alert('error')
// }


let url = 'https://api.github.com/repos/GrCOTE7/online-168/commits'
// First Way
// let response = await fetch(url)
// let text = (await response.json())[2]
// console.log(text.commit)

// Second Way
let getUsers = async (name) => {
  return fetch(`https://api.github.com/users/${name}`)
    .then(
      (response) => {
        if (response.status != 200) {
          return null
        }
        return response.json()
      }
    )
  // let result = await
  // return result
}
console.log( (await getUsers('SolangeHarmoniePICARD')).avatar_url )




