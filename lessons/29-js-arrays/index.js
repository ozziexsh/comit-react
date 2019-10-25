// Make an array of your siblings' names or your favorite movie characters' names.
let siblings = ["Fareed", "Moin", "Riz", "Faraha", "Karamah", "Najeeh"];

// Make an array of your parents' names.
let parents = ["Bashir", "Tahirah"];

// Combine these two arrays using concat().
sib_parent = siblings.concat(parents);
console.log(sib_parent);

// Add your pets' names using push().
sib_parent.push("Petname");
console.log(sib_parent);

// Reverse the order of the array.
console.log(sib_parent.reverse());

// Access one of your parents' names using the square bracket notation.
console.log(sib_parent[1]);

// Update the name of one of your parents using the index and square bracket
//  notation
sib_parent[2] = "Muhammad";
console.log(sib_parent);

// Loop over the array and log each item to the console
// use both a for loop and a for..of loop

for (let x = 0; x < sib_parent.length; x++) {
  console.log(sib_parent[x]);
}
console.log("Output of for ..of loop:");
for (let i of sib_parent) {
  console.log(i);
}
