const messages = [];

function writeCards(guests, event){
    for (let i = 0; i < guests.length; i++) {
        messages.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return messages;
}

writeCards(guests, "Birthday")


function countDown (x) {
    while (x >= 0) {
    console.log(x);
    x--;
    }
}