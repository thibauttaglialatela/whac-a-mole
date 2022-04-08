const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let time = 10;
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let randomPosition;
timeLeft.textContent = time;
let timerId = null;



function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');
    randomPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === randomPosition) {
            result++;
            score.textContent = result;
            randomPosition = null;
        }
    })

})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();


const decreaseTime = () => {
    time = time <= 0 ? 0 : time -1;
    timeLeft.textContent = time;
    if (time === 0) {
        clearInterval(timeLeftId);
        clearInterval(timerId);
        alert('GAME OVER! Your result is ' + result);
    }
}

let timeLeftId = setInterval(decreaseTime, 1000);


