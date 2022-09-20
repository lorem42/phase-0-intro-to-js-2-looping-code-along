// Code your solutions in this file
const thankYou = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}
function countDown(number) {
    let count = number
    while (count >= 0) {
        console.log(count)
        count--
    }
}