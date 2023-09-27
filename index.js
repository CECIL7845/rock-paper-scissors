let hands = ["rock", "paper", "scissors"]

function gethand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(gethand())