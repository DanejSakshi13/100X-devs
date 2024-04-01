/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    for(let i = 1 ; i < n ; i ++){
        sum = sum + i;
    }
    return sum;
}
let start = performance.now();
//let start = new Date().getTime();             //time before function call

let ans = calculateTime(1000000000);                   //function call

let end = performance.now();
//let end = new Date().getTime();               //time before function call

let times = end - start;

console.log(ans)
console.log(times)










/*
OUTPUT
1-100 => 4950,           0.049699991941452026
1-100000 => 4999950000,  27.56020000576973
1-1000000000 => 499999999067109000, 1362.5205999910831
*/