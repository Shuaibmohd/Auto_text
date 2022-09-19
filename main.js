const textElm = document.getElementById('text')
const speedElm = document.getElementById('speed')

const text = 'I Love Coding'
let idx = 1
let speed = 300 / speedElm.value

writeText()

function writeText() {
    textElm.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1

    }
    setTimeout(writeText, speed)

}


speedElm.addEventListener('input', (e) => {

    speed = 300 / e.target.value
    console.log(speed)
})

