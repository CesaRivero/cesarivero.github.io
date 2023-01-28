const colores = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click',function (){
const randomNumber=Math.floor(Math.random()*colores.length);
document.body.style.backgroundColor=colores[randomNumber]
color.textContent= colores[randomNumber]
console.log(randomNumber)
console.log(colores[randomNumber])
})
