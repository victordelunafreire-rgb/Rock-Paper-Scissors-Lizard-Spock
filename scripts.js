const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

const gameRules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
}

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizar', 'spock']
    const randomNumber = Math.floor(Math.random() * choices.length)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Alexa: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'

    } else if (gameRules[human].includes(machine)) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa!'
    }
}