const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const score= document.querySelector('#score')
const timeLeft= document.querySelector('#time')




let result=0;

function randomSquare(){
    console.log(squares);
    squares.forEach(
        square => {
            square.classList.remove('mole')
        }
    )

    let randomSquare = squares[Math.floor(Math.random()*9)]
    
    //  squares.classList.add('mole')

}

function moveMole(){
    let timerId = null
    timerId= setInterval(randomSquare, 500)
}

moveMole()
