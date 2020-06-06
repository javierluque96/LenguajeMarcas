document.addEventListener('DOMContentLoaded', () => {


  // Card options
  const cardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'pizza', img: 'images/pizza.png' }
  ]

  const grid = document.querySelector('.grid')
  const score = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsMatched = []

  // Randomize card array
  cardArray.sort(() => 0.5 - Math.random())

  // Create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // check for matches
  function checkForMatches() {
    var cards = document.querySelectorAll('img')
    const idOne = cardsChosenId[0]
    const idTwo = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Good job! You found a match')
      cards[idOne].setAttribute('src', 'images/white.png')
      cards[idTwo].setAttribute('src', 'images/white.png')
      cardsMatched.push(cardsChosen)
    } else {
      cards[idOne].setAttribute('src', 'images/blank.png')
      cards[idTwo].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }

    cardsChosen = []
    cardsChosenId = []
    score.textContent = `Score: ${cardsMatched.length}`

    if (cardsMatched.length === cardArray.length / 2) {
      score.textContent = 'Congratulations, you won!!'
    }
  }


  // flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    // If we have chosen 2 cards, then we will check if it's a match
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatches, 500)
    }
  }

  createBoard()
})