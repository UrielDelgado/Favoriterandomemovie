"use strict"

// let age = 15;
// while (age  < 18) { // 
//   console.log(`You are ${age} years old. That is not old enough`);
//   age++; // increment +1 every loop 
 
//   console.log(`Happy birthday, You are ${age} years old`);
//   if(age == 17) {
//     console.log(`Just one more year to go before you are 18`);
//   }
// }

//   let Countdown = 10;
//   while (Countdown > 10){
//     console.log( `Countdown: ${Countdown}`);
//     Countdown--;
//     if(Countdown == 0){
//     console.log(`Happy new Year!!!`);
//     }
//     break
    
// }
let Countdown = 10;
while (Countdown > 0){
  console.log( `Countdown: ${Countdown}`);
  Countdown--;
  if(Countdown == 0){
  console.log(`Happy new Year!!!`);
  
  }
}
//Here is a do-while example:
let counter = 10;

do {
  console.log(`Countdown: ${counter}`);
  counter--; // decrement the counter by 1
} while (counter > 0);

console.log("Countdown: 0. Ready for launch");

// Array of movie objects
const movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 }
  ];
  
  // Set up an index for while loop
  let index = 0;
  
  // Use a while loop to process the array

let amountOfMovies = movies.length;
console.log(`Movies: ${amountOfMovies}`);
  while (index < amountOfMovies) {
    const movie = movies[index];
    if (movie.year < 2000) { // Check if the movie was released before the year 2000
      console.log(`${movie.title} was released in ${movie.year}.`);
    }
    index++; // Increment index to move to the next movie
  }



 

  let books = [
    { title: "The Hunger Games", author:"Suzanne Collins", year: 2008 },
    { title: "Harry Potter and the Deathly Hallows", author:"J.K. Rowling", year: 2007 },
    { title: "The Da Vinci Code", author:" Dan Brown ", year: 2003 },
    { title: "The Girl with the Dragon Tattoo", author:"by Stieg Larsson", year: 2005},
    { title: "he Fault in Our Stars", author:" John Green ", year: 2012 },
    { title: "The Kite Runner", author:"Khaled Hosseini ", year: 2003 },
    { title: "The Help", author:"Kathryn Stockett ", year: 2009 }
  ];

  let index1 = 0;
  let checkPublicationYear = books.length;
  console.log(`Books: ${checkPublicationYear}`);
   while (index1 < checkPublicationYear) {
    const book = books[index1];
     if (book.year > 2007){
        console.log(`The author of "${book.title}" is ${book.author} and they realeased the book in ${book.year}.`);
     }
     index1++;
   
    }