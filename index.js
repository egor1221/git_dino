let pers = document.getElementById('pers')
let goat = document.getElementById('goat')
let count = 0

document.addEventListener('keydown', (event) => {
    jump()
    count++
})

function jump(){
    if(pers.classList !== 'jump'){
        pers.classList.add('jump')
    }
    setTimeout(() => {
        pers.classList.remove('jump')
    }, 300)
    document.getElementById('count').innerHTML = count
}

let isAlive = setInterval(() => {
    let persTop = parseInt(window.getComputedStyle(pers).getPropertyValue('top'))
    let goatLeft = parseInt(window.getComputedStyle(goat).getPropertyValue('left'))

    if(goatLeft<40 && goatLeft>0 && persTop>=325){
        document.getElementsByClassName('proebal')[0].style.display = 'block'
        count = 0
    }
}, 10)

document.getElementById('button').addEventListener('click', () => document.getElementsByClassName('proebal')[0].style.display = 'none')