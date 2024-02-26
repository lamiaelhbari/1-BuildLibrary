/* 
This challenge involves implementing a class structure to manage various types
of media such as books, movies, and CDs, enabling actions like loan management, 
average rating calculation, and catalog management.*/

// 1- Media class :
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  // 2-  accessors for private properties:
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  // 3- Toggle the current state of the property _isCheckedOut:
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // 4- calculating the average rating :
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingsSum / this._ratings.length;
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    } else {
      console.log("Rating should be between 1 and 5.");
    }
  }

  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
}

// 5- Book class extending Media :
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

// 6- Creating an instance of Book and using methods:
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// 7- Movie class extending Media:
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
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
console.log(speed.getAverageRating());

// 8- CD class extending Media:
class CD extends Media {
  constructor(artist, title, songs, songTitles) {
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._songTitles = songTitles;
  }
  get artist() {
    return this.artist;
  }
  get songs() {
    return this.songs;
  }
  get songTitles() {
    return this._songTitles;
  }

  // 9- Randomly shuffle the songs :
  shuffle() {
    let shuffledSongs = [...this._songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [
        shuffledSongs[j],
        shuffledSongs[i],
      ];
    }
    return shuffledSongs;
  }
}

const myCD = new CD("Adam", "Greatest Hits", [
  "Song 1",
  "Song 2",
  "Song 3",
  "Song 4",
]);
myCD.toggleCheckOutStatus();
console.log(myCD.isCheckedOut);
myCD.addRating(3);
console.log(myCD.getAverageRating());
console.log(myCD.shuffle());

// 10- Catalogue class : to gather all the Medias:
class Catalogue {
  constructor() {
    this._mediaList = [];
  }
  addToCatalog(media) {
    this._mediaList.push(media);
  }
  get mediaList() {
    return this._mediaList;
  }
  displayCatalog() {
    this._mediaList.forEach((media) => {
      console.log(media.title);
    });
  }
}

const myCatalogue = new Catalogue();
myCatalogue.addToCatalog(historyOfEverything);
myCatalogue.addToCatalog(speed);
myCatalogue.addToCatalog(myCD);

console.log("Catalogue:");
myCatalogue.displayCatalog();
