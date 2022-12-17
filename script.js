let btn = document.getElementById('btn')


btn.addEventListener('click', function(){
    card1Answer1.innerText = ''
    card1Answer2.innerText = ''
    card1Answer3.innerText = ''
    card2Answer1.innerText = ''
    card2Answer2.innerText = ''
    card2Answer3.innerText = ''
    card3Answer1.innerText = ''
    card3Answer2.innerText = ''
    card3Answer3.innerText = ''

})



let card1Name1 = document.getElementById('card1Name1')
let card1Answer1 = document.getElementById('card1Answer1')

card1Name1.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DE LA CANCION')
    card1Answer1.innerText = userAnswer
})

let card1Name2 = document.getElementById('card1Name2')
let card1Answer2 = document.getElementById('card1Answer2')

card1Name2.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DEL ALBUM')
    card1Answer2.innerText = userAnswer


})

let card1Name3 = document.getElementById('card1Name3')
let card1Answer3 = document.getElementById('card1Answer3')

card1Name3.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA GENERO MUSICAL')
    card1Answer3.innerText = userAnswer

})



let card2Name1 = document.getElementById('card2Name1')
let card2Answer1 = document.getElementById('card2Answer1')

card2Name1.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DE LA CANCION')
    card2Answer1.innerText = userAnswer
})

let card2Name2 = document.getElementById('card2Name2')
let card2Answer2 = document.getElementById('card2Answer2')

card2Name2.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DEL ALBUM')
    card2Answer2.innerText = userAnswer


})

let card2Name3 = document.getElementById('card2Name3')
let card2Answer3 = document.getElementById('card2Answer3')

card2Name3.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA GENERO MUSICAL')
    card2Answer3.innerText = userAnswer

})


let card3Name1 = document.getElementById('card3Name1')
let card3Answer1 = document.getElementById('card3Answer1')

card3Name1.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DE LA CANCION')
    card3Answer1.innerText = userAnswer
})

let card3Name2 = document.getElementById('card3Name2')
let card3Answer2 = document.getElementById('card3Answer2')

card3Name2.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA NOMBRE DEL ALBUM')
    card3Answer2.innerText = userAnswer


})

let card3Name3 = document.getElementById('card3Name3')
let card3Answer3 = document.getElementById('card3Answer3')

card3Name3.addEventListener('click', function (){
    let userAnswer = prompt('ESCRIBA GENERO MUSICAL')
    card3Answer3.innerText = userAnswer

})

let imgCard1 = document.getElementById('imgCard1')

imgCard1.addEventListener('click', function(){
    console.warn();


})
