// 1: Define a function that will show even numbers from 0 to 100 as output
function showEven() {
  for (let x = 0; x <= 100; x++) {
    if (x % 2 == 0) console.log(x);
  }
}

//2:Define a function showUser to show bio-data
function showUser(name, age, phnum, street, postalcode, married) {
  console.log(
    name,
    "\n",
    age,
    "\n",
    phnum,
    "\n",
    street,
    "\n",
    postalcode,
    "\n",
    married
  );
}

// 3: Define a evenNumber variable and assign a function value
const evenNumber = function() {
  for (let x = 0; x <= 100; x++) {
    if (x % 2 == 0) console.log(x);
  }
};
// Funciton calling
console.log("Output of showUser");
showUser("Basharah", 34, 6345678, "115th Street E", "S7N2W6", true);
console.log("Output of showEven");
showEven();

// call evenNumber 5 times
for (let i = 1; i <= 5; i++) {
  console.log("Calling evenNumber:", i);
  evenNumber();
}

// Define a fibonacci variable and assign a function value
const fibonacci = function(n) {
  if (n < 0) console.log("Incorrect input");
  else if (n == 1) return 0;
  else if (n == 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};
// Calling fibonacci
console.log("Result of Fibonacci:", fibonacci(9));

// Define a showName variable and assign a function as value
const showName = function(name) {
  console.log("==============");
  console.log("= ", name, " =");
  console.log("==============");
};
// calling showName 2 times
showName("Basharah");
showName("Basharah");
