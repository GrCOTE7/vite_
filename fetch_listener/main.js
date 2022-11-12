import '/styles.css'

let pathArray = window.location.pathname;

let page = pathArray.split(/(\w+)\.html/gm)[1]
console.log(page)

let file = '/' + page + '.js'
import(/* @vite-ignore */file)