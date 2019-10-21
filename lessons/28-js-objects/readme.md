# Lesson 28 - JavaScript Objects

# Tutorials

- [Objects: the basics - Objects](https://javascript.info/object)
- [Objects: the basics - Object methods](https://javascript.info/object-methods)

Videos:

- [Object Oriented JavaScript Tutorial #2 - Object Literals](https://www.youtube.com/watch?v=7d9H34ZVRPg)
- [Object Oriented JavaScript Tutorial #3 - Updating Properties](https://www.youtube.com/watch?v=ni9e-lOEw3Q)

# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 28"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Define a user variable and assign a literal object
  - Show the user object as output
  - Show the user type as output using typeof
  - Set the following properties on the user
    - username: `batman`
    - password: `hunter2`
  - Log the user variable again
  - Show the message "Access Granted" if the users username is batman and the password is `*******`, else show "Access Denied"
  - Create a second user object
    - username: `wonderwoman`
    - password: `123123`
    - Create a greet function on the user object that logs `Hello, I am <the username on this object>`,
    - Create a function to update the username on this user object, taking in the new username as a function argument
  - Call the greet method on the second user object
  - Call the update username method on the second user object to change the username
  - Call the greet method one more time
