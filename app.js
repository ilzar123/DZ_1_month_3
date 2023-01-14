const phoneInput = document.querySelector(`#phoneInput`)
const phoneCheck = document.querySelector(`#phoneCheck`)
const phoneResult = document.querySelector(`.phoneResult`)

const RegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/

function phoneRussia() {
    if (RegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}
phoneCheck.onclick = () => phoneRussia()

document.addEventListener('keydown', (e) => {
    e.keyCode === 13 ? phoneRussia() : false
})


//2
const block = document.querySelector(`.block`)
let possition = 0
const move = () => {
    block.style.left = `${possition}px`
    possition++
    if (possition < 450) {
        setTimeout(move, 10)
    }
}
move()