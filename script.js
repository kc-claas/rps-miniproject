let rCount = 0
let pCount = 0
let sCount = 0
let winCount = 0
let lossCount = 0
let tieCount = 0
let gamesCount = 0

const game = function(){
let userInput = ""
var userChoice
    while ((userInput.toUpperCase() !== "R") && (userInput.toUpperCase() !== "P") && (userInput.toUpperCase() !== "S"))
    {userInput = prompt("R, P, or S?")}

if (userInput.toUpperCase() === "R")
    {rCount++
    userChoice = "Rock"}
else if (userInput.toUpperCase() === "P")
    {pCount++
    userChoice = "Paper"}
else if (userInput.toUpperCase() === "S")
    {sCount++
    userChoice = "Scissors"}

var cpuInput
var cpuChoice
cpuInput = (Math.floor(Math.random()*3))
if (cpuInput === 0)
    {cpuChoice = "Rock"}
else if (cpuInput === 1)
    {cpuChoice = "Paper"}
else if (cpuInput === 2)
    {cpuChoice = "Scissors"}

var outcome
if (userChoice === cpuChoice)
    {outcome = "You tied"
    tieCount++}
else if (((userChoice === "Rock") && (cpuChoice === "Paper")) || ((userChoice === "Paper") && (cpuChoice === "Scissors")) || ((userChoice === "Scissors") && (cpuChoice === "Rock")))
    {outcome = "You lose"
    lossCount++}
else
    {outcome = "You win"
    winCount++}

gamesCount++
alert(`You chose ${userChoice}
    Cpu chose ${cpuChoice}
    ${outcome}`)

if (confirm("Play again?"))
    game()
else
alert(`    Picked Rock ${rCount} times
    Picked Paper ${pCount} times
    Picked Scissors ${sCount} times

    You played ${gamesCount} games
    You lost ${lossCount} of them
    You won ${winCount} of them
    And you tied ${tieCount}`)
}

game()