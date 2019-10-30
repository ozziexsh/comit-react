let favfruits = prompt("Enter your five favourite fruits: ");
let ffruits = favfruits.split(', ');
//console.log(ffruits);
/*let first = ffruits[0];
let second = ffruits[1];
let third = ffruits[2];
let forth = ffruits[3];
let fifth = ffruits[4];*/

let [first, second, third, ...tail] = ffruits;
console.log(`Your top 3 favourite fruits are ${first}, ${second}, ${third} `);
console.log(`Fruits those didn't make to top 3 are: ${tail}`);


