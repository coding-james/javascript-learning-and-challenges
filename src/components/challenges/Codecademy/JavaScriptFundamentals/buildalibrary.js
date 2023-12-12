class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce(
            (currentSum, rating) => currentSum + rating,
            0
        );

        return (ratingsSum / this.ratings.length).toFixed(2);
    }

    addRating(value) {
        if (value >= 1 && value <= 5) {
            this.ratings.push(value);
            // console.log("Rating recorded");
        } else {
            console.log("Invalid rating, please resubmit a rating between 1 - 5");
        }

    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

    get movieCast() {
        return this._movieCast;
    }
}

class CD extends Media {
    constructor(artist, title, runTime, songs) {
        super(title);
        this._artist = artist;
        this._runTime = runTime;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get runTime() {
        return this._runTime;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        let shuffled = this.songs.slice();
        let currentIndex = shuffled.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [shuffled[currentIndex], shuffled[randomIndex]] = [
                shuffled[randomIndex], shuffled[currentIndex]];
        }
        return shuffled;
    }
}


// Example Book
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
console.log(`\ntitle: ${historyOfEverything.title} author:${historyOfEverything.author}`);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);


historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Example Movie
const speed = new Movie("Jan de Bont", "Speed", 116, ["Keanu Reeves", "Dennis Hopper", "Sandra Bullock"]);
console.log(`\ntitle: ${speed.title} cast: ${speed.movieCast}`);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
speed.addRating(8);
console.log(speed.getAverageRating());

// Example CD
const blurTheBestOf = new CD("Blur", "The Best Of", 160, ["Beetlebum", "Song 2", "There's No Other Way", "The Universal", "Coffee and TV"]);
console.log(`\nartist: ${blurTheBestOf.artist} title: ${blurTheBestOf.title} songs: ${blurTheBestOf.songs}`);
blurTheBestOf.addRating(5);
blurTheBestOf.addRating(4);
blurTheBestOf.addRating(3);
blurTheBestOf.addRating(5);
console.log(blurTheBestOf.getAverageRating());
console.log(blurTheBestOf.shuffle());