# Lesson 19 - JavaScript Variables

# Tutorials

- [JavaScript Fundamentals - "use strict"](https://javascript.info/strict-mode)
- [JavaScript Fundamentals - Variables](https://javascript.info/variables)
- [JavaScript Fundamentals - Data types](https://javascript.info/types)

Note: instead of using `alert()` to show values, we can output them to the browsers console using the `console.log()` function. It takes any number of values separated by a comma:

```javascript
console.log(10); // logs "10" to the console

const name = "Ozzie";
console.log(name); // logs "Ozzie"
console.log("name: ", name); // logs "name: Ozzie"
```

# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Exercise 19"
- Include the `index.js` file inside the `index.html`

Inside the `index.js` file:
  - Declare the following constant variables with initial values (using proper naming)
    - month of birth
    - first name
    - last name
  - Declare the following variables using `let` but without assigning an initial value
    - city
    - age
    - next city
  - Set the values for city and age
  - Assign the value of next city equal to the contents of the city variable
  - Log all of the variables to the console using `console.log()` also stating what the variable contains:
    - e.g. `console.log('age: ', age);`
  - Log your first and last name combined using backticks to insert each variable into the string
