// Define a user variable and assign a literal object
const user = {};

// Show the user object as output
console.log(user);

// Show the user type as output using typeof
console.log(typeof user);

// Set the properties on the user

user.username = "batman";
user.password = "hunter2";

// Log the user variable again
console.log(user);
// Show the message "Access Granted" if the users username is batman and
// the password is *******, else show "Access Denied"
if (user.username == "batman" && user.password == "hunter2")
  console.log("Access Granted");
else console.log("Access Denied");

// Create a second user object

const user2 = {
  username: "wonderwomen",
  password: 123123,

  // Create a greet function on the user object that logs Hello, I am <the username on this object>,
  greet() {
    console.log("Hello, I am ", this.username);
  },
  setName(name) {
    this.username = name;
  }
};
// Call the greet method on the second user object
user2.greet();

// Call the update username method on the second
// user object to change the username
user2.setName("Basharah");

// Call the greet method one more time
user2.greet();
