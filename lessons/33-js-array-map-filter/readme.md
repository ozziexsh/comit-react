# Lesson 33 - JavaScript Array Map Filter

We covered this a bit in [Lesson 29 - JavaScript Arrays](../29-js-arrays/readme.md), but it is important that we have this concept down before getting into React.

# Refresher - Arrow Functions

Generally in tutorials when using array map/filter they will use arrow functions, so it's important that you understand what you are looking at before moving on.

As a reminder, the below two pieces of code do the same thing. They each declare a function "add" that takes in two parameters "numOne" and "numTwo" and return the sum of both parameters.

```javascript
function add(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(add(5, 10)); // 15

const add = (numOne, numTwo) => numOne + numTwo;

console.log(add(5, 10)); // 15
```

The reason most people use arrow functions when doing array maps/filters is that it is much shorter than writing the whole `function(){}` syntax every time.

- [JavaScript ES6 Arrow Functions Tutorial [9m31s]](https://www.youtube.com/watch?v=h33Srr5J9nY)

# Tutorials

- [The JavaScript Array Map() Method](https://dev.to/sarah_chima/the-javascript-array-map-method-44m0)
- [The JavaScript Array Filter() Method](https://dev.to/sarah_chima/filter-arrays-with-the-javascript-filter-method-261n)

# Exercise Instructions

- Create an `index.html` file with all of the usual needed tags
- Give the page a title
- Create an `index.js` file and include it in your html
- Inside the index.js
  - Create a variable and store the value `[1, 2, 3, 4, 5]`
  - Map the above array into a new array of squared values and store that in a new variable
  - Log both arrays to the console to view the difference
  - Create a variable and store the value `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
  - Filter the above values into even numbers only and store the result in a new variable
  - Filter the above values into odd numbers only and store the result in a new variable
  - Log all 3 variables
  - Create an array of 5 or more objects and store it in a variable
    - Give each object a "name", "age", and "city" property with a value as well
  - Filter the above array into a new variable containing only people over the age of 30
  - Filter the above array into a new variable containing only people less than 20 AND live in Saskatoon
  - Map the above array into a new array containing just the age's of everyone and store it in a  variable
  - Log all of the arrays to the console

# Bonus

- Create a function called `stripVowels` that takes in a string and returns the string with all vowels removed
- Convert the passed in string into an array of individual characters, and then use `filter` to only keep consonants.
- Turn the resulting array back into a string and return it to the user
- Call & log the output of this function 3 times with different strings each time
