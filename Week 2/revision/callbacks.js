/*
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSquare(a,b){
    let s1 = square(a);
    let s2 = square(b);
    let sum1 = s1+s2;
    return sum1;
}
sumOfSquare(1,2)
function sumOfCube(a,b){
    let c1 = cube(a);
    let c2 = cube(b);
    let sum2 = c1+c2;
    return sum2;
}
sumOfCube(1,2)



*/


function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,fn){
    let v1 = fn(a);
    let v2 = fn(b);
    let sum = v1+v2;
    return sum;
}

let ans = sumOfSomething(1,2,square);
console.log(ans)