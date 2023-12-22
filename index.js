let pers = document.getElementById('pers')
let goat = document.getElementById('goat')

document.addEventListener('keydown', (event) => {
    jump()
})

function jump(){
    if(pers.classList !== 'jump'){
        pers.classList.add('jump')
    }
    setTimeout(() => {
        pers.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(() => {
    let persTop = parseInt(window.getComputedStyle(pers).getPropertyValue('top'))
    let goatLeft = parseInt(window.getComputedStyle(goat).getPropertyValue('left'))

    if(goatLeft<40 && goatLeft>0 && persTop>=325){
        
    }
}, 10)