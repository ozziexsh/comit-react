# Lesson 29 - JavaScript Arrays

# Tutorials

- [Data types - Arrays](https://javascript.info/array)
- [Data types - Array methods](https://javascript.info/array-methods)

Videos

- [JavaScript Arrays [5m15s]](https://www.youtube.com/watch?v=oigfaZ5ApsM)

# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 29"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Make an array of your siblings' names or your favorite movie characters' names.
  - Make an array of your parents' names.
  - Combine these two arrays using concat().
  - Add your pets' names using push().
  - Reverse the order of the array.
  - Access one of your parents' names using the square bracket notation.
  - Update the name of one of your parents using the index and square bracket notation
  - Loop over the array and log each item to the console
    - use both a `for` loop and a `for..of` loop

# Extra Exercises

- [https://www.teaching-materials.org/javascript/exercises/objects](https://www.teaching-materials.org/javascript/exercises/objects)
- (Difficult) - Recreate the `array.map` function. Complete the following code

```javascript
function map(arr, func) {
  // todo, turn arr into new array using func
}

const result = map([1, 2, 3], function(item) {
  return item * 2;
});

console.log(result); // [2, 4, 6]
```
