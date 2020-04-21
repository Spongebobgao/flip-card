document.addEventListener("DOMContentLoaded", () => {
  const allTheCards = [
    {
      name: "bear",
      img: "images/bear.png"
    },
    {
      name: "bear",
      img: "images/bear.png"
    },
    {
      name: "bird",
      img: "images/bird.png"
    },
    {
      name: "bird",
      img: "images/bird.png"
    },
    {
      name: "cat",
      img: "images/cat.jpg"
    },
    {
      name: "cat",
      img: "images/cat.jpg"
    },
    {
      name: "elephant",
      img: "images/elephant.jpeg"
    },
    {
      name: "elephant",
      img: "images/elephant.jpeg"
    },
    {
      name: "fox",
      img: "images/fox.jpg"
    },
    {
      name: "fox",
      img: "images/fox.jpg"
    },
    {
      name: "lion",
      img: "images/lion.png"
    },
    {
      name: "lion",
      img: "images/lion.png"
    },
    {
      name: "pig",
      img: "images/pig.jpg"
    },
    {
      name: "pig",
      img: "images/pig.jpg"
    },
    {
      name: "tiger",
      img: "images/tiger.png"
    },
    {
      name: "tiger",
      img: "images/tiger.png"
    }
  ]
  allTheCards.sort(() => Math.random() - 0.5)

  const board = document.querySelector(".board")
  //create the board
  function createBoard() {
    for (let i = 0; i < allTheCards.length; i++) {
      var element = document.createElement("img");
      element.setAttribute("src", "images/background.jpg")
      element.setAttribute("id", i)
      element.setAttribute("style", "box-shadow:5px 5px 5px 5px #b8860b;cursor:pointer")
      element.addEventListener("click", flipCard)
      board.appendChild(element)
    }
  }

  createBoard()

  var cardChosen = []
  var cardChosenId = []
  //flip card
  function flipCard() {
    var id = this.id
    cardChosen.push(allTheCards[id].name)
    cardChosenId.push(id)
    this.setAttribute("src", allTheCards[id].img)
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500)
    }
  }
  const score = document.querySelector('.score')
  var count = 0
  //check if the cards are match
  function checkMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) {
      document.getElementsByClassName("success")[0].innerHTML = "You found a match!"
      cards[optionOneId].setAttribute("src", "images/correct.jpg")
      cards[optionOneId].removeEventListener("click", flipCard)
      cards[optionTwoId].setAttribute("src", "images/correct.jpg")
      cards[optionTwoId].removeEventListener("click", flipCard)
      count++
    }
    else {
      document.getElementsByClassName("success")[0].innerHTML = "Please try again!"
      cards[optionOneId].setAttribute("src", "images/background.jpg")
      cards[optionTwoId].setAttribute("src", "images/background.jpg")
    }
    cardChosen = []
    cardChosenId = []
    score.textContent = count
    if (count === allTheCards.length / 2) {
      document.getElementsByClassName("success")[0].innerHTML = "Congratulations! You found all the  matches!"
    }
  }
})