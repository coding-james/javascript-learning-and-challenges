// Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
export class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }

    // Insert code below
    movieTime() {
        return (this.data - (this.users * 5)) >= 10 ? true : false;
    }
}

/* Write a game function balloonAttack that takes two Player instances, 
calculates the balloons left for each player after 10 minutes 
(using the hitsPerMinute property) and returns the name of the winner. 
If the result is a tie, return the string 'Tie'. */
export class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
}

// Write function below
export function balloonAttack(player1, player2) {
    player1.balloonCount = player1.balloonCount - player2.hitsPerMinute * 10;
    player2.balloonCount = player2.balloonCount - player1.hitsPerMinute * 10;

    if (player1.balloonCount > player2.balloonCount) {
        return player1.name;
    } else if (player1.balloonCount < player2.balloonCount) {
        return player2.name;
    } else {
        return "Tie";
    }
}