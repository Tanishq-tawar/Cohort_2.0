let ground = document.querySelector('.ground')
ground.addEventListener('mousemove', function(e){
    x = e.offsetX
    y = e.offsetY
    // console.log(`${x}, ${y}`)

    ground.style.setProperty('--x', x + 'px')
    ground.style.setProperty('--y', y + 'px')
})


let h1 =document.querySelector('h1')
let text = h1.textContent
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let iteration = 0

function getrandom(){ {
   
   let random = text.split('').map(function(char,index){
     if(iteration >= index) {return text[index]}
         return alphabet.split('')[ Math.floor(Math.random() * 52)]
}).join("")
iteration += 0.5
h1.innerText = random

}}

h1.addEventListener('mouseover', function(){

setInterval(getrandom ,100)})
