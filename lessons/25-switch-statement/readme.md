# Lesson 25 - JavaScript Switch Statement

# Tutorials

- [JavaScript Fundamentals - Switch Statements](https://javascript.info/switch)

# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 22"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Define weekdayNumber and assign a numeric value between 1 and 7
  - Complete the following first using if/else and then again afterwards using a switch statement
    - If weekday number is 1 show the following message: Today is Monday
    - If weekday number is 2 show the following message: Today is Tuesday
    - If weekday number is 3 show the following message: Today is Wednesday
    - If weekday number is 4 show the following message: Today is Thursday
    - If weekday number is 5 show the following message: Today is Friday
    - If weekday number is 6 show the following message: Today is Saturday
    - If weekday number is 7 show the following message: Today is Sunday
    - If weekday number it's not bettwen 1 and 7 show an error message: Error: Number not between 1-7
  - Once you have the code working for both statements refactor the code as follows
    - Don't use console.log() inside the switch statement
    - Instead add a message variable so each case only adds the selected weekname message
    - Use only one console.log() after the switch statement to show the result and error
