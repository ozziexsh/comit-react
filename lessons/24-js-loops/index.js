let i;
let sum = 0;
for (i = 0; i < 1000; i++) {
  sum += i;
  if (sum > 400) break;
}
alert(sum);

for (let x = 0; x <= 10; x++) {
  console.log(x);
}

let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 10);

let z = 0;
while (z <= 10) {
  console.log(z);
  z++;
}

for (let a = 100; a >= 0; a--) {
  console.log(a);
}

let b = 100;
do {
  console.log(b);
  b--;
} while (b >= 0);

let c = 100;
while (c >= 0) {
  console.log(c);
  c--;
}

for (x = 1; x < 100; x++) {
  if (x % 2 != 0) continue;
  console.log(x);
}

y = 0;
do {
  y++;
  if (y % 2 != 0) continue;
  console.log(y);
} while (y < 99);

z = 0;
while (z < 99) {
  z++;
  if (z % 2 != 0) continue;
  console.log(z);
}
// Below code is to print asterick paramid in console.

// let d, e;
// for (d = 1; d <= 13; d++) {
//   for (e = 0; e < d; e++) console.log("*");
//   console.log("\n");
// }
