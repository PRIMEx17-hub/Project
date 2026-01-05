let player = 
{
    name: "kane",
    chips: 200
}
let scard = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("Cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips
function grc() 
{
    let rn = Math.floor( Math.random() * 14)
    if (rn > 10) 
    {
       return 10
    }
  else if (rn === 1) 
    {
        return 11
    }
    else 
        {
            return rn
        }
}

function startGame()
{
    let firstCard =  grc()
    let secondCard =  grc()
    isAlive = true
        scard = [firstCard, secondCard]
        sum = firstCard + secondCard
    renderGame()
}

function renderGame() 
{
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < scard.length; i++)
    {
        cardEl.textContent = cardEl.textContent + scard[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card "
        isAlive = true
    }
    else if (sum === 21) 
    {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else 
    {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(cardEl)
    console.log(sumEl)
    messageEl.textContent = message
    console.log("You drew " + scard)
    console.log("Is alive: " + isAlive)
    console.log("Has black jack: " + hasBlackJack)
}

function newCard()
{
    if (isAlive === true && hasBlackJack === false)
    {
        let card =  grc()
        sum += card
        scard.push(card)
        console.log(scard)
        renderGame()
    }
}


