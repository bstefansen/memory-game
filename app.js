document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: "jacket",
      img: "images/jacket.png"
    },
    {
      name: "shoe",
      img: "images/shoe.png"
    },
    {
      name: "sock",
      img: "images/sock.png"
    },
    {
      name: "hat",
      img: "images/hat.png"
    },
    {
      name: "shirt",
      img: "images/shirt.png"
    },
    {
      name: "towel",
      img: "images/towel.png"
    },
    {
      name: "jacket",
      img: "images/jacket.png"
    },
    {
      name: "shoe",
      img: "images/shoe.png"
    },
    {
      name: "sock",
      img: "images/sock.png"
    },
    {
      name: "hat",
      img: "images/hat.png"
    },
    {
      name: "shirt",
      img: "images/shirt.png"
    },
    {
      name: "towel",
      img: "images/towel.png"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('width', '100px')
      card.setAttribute('height', '100px')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/heart.png')
      cards[optionTwoId].setAttribute('src', 'images/heart.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})