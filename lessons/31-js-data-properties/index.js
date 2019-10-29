/*
// Favourite Movies
let favouriteMovies = prompt("Enter your three favourite movies: ");
let favMovies = favouriteMovies.split(', ');
for ( let movies of favMovies) {
    console.log(`My favourite movie is : ${movies}`);
}

//Prompt the user to enter a sentence that they would like reversed
*/
function reverseString() {
    
    let sentence = prompt("Enter your sentence: ");
    let arr = sentence.split('');
    arr = arr.reverse();
    arr = arr.join('');
    console.log(arr);
}
reverseString();


