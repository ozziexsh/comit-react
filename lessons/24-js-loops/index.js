// Add all the numbers between 0 and 1000 using for statement
let sum=0;
for (let i=1;i<=1000; i++)
{
    sum=sum+i; 
    if (sum > 400)
    {break;}
    console.log(sum);
}
// Show numbers from 0 to 10 using For loop
for (j=0;j<=10;j++)
{
    console.log(j);
}
// Show numbers from 100 to 0 using For loop
for (k=100;k>=0;k--)
{
    console.log(k);
}
// Show even numbers between 0 and 100 using For loop
for (l=0;l<100;l=l+2)
{
    let l1=l+2;
    if (l1>=100)
    {break;}
    else {
        console.log(l1);
    }
}
// Produce the following output using For loop
let star = ("*");
for (m=1;m<=13;m++)
{
    for (n=1;n<=m;n++);
    {
        console.log(star);
        star = star + "*";
    }
}
// Show numbers from 0 to 10 using while loop
let a=0;
while (a<=10)
{   console.log(a);
    a++;
}
// Show numbers from 100 to 0 using while loop
let b=100;
while (b>=0)
{
    console.log(b);
    b--;
}
// Show even numbers between 0 and 100 using while loop
let c=0;
while (c<100)
{
    c=c+2;
    if (c==100) {break;}
    else
    {
        console.log(c);
    }
}
// Produce the following output using while loop
let star1 = "*";
let d=1;
let e=1;
while (d<=13)
{
        while (e<=d)
        {
            console.log(star1);
            star1 = star1 + "*";
            e++;
        }
        d++;
}
// Show numbers from 0 to 10 using do-while loop
let p = 0;
do {
  console.log(p);
  p++;
} while (p <= 10);
// Show numbers from 100 to 0 using do-while loop
let q = 100;
do {
    console.log(q);
    q--;
} while (q>=0);
// Show even numbers between 0 and 100 using do-while loop
let r = 0;
do {
    r=r+2;
    if(r==100) {break;}
    else
    {
        console.log(r);
    }
} while(r<100);
// Produce the following output using while loop
let star2 = "*";
let s = 1;
let t = 1 ;
do {
        do {
            console.log(star2);
            star2 = star2 + "*";
        }while (t<=s);
}while (s<=13);