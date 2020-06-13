const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#seconds')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  // Assign the id of the randomPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('click', () => {
    if (id.id === hitPosition) {
      result++
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 600)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0) {
    clearInterval(timerId)
    alert('GAME OVER! Your score is ' + result)
  }
}

let timerId = setInterval(countDown, 1000)