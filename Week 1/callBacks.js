function sum(num1,num2){
    let result = num1 + num2
    return result
}
function displayResult(data){
    console.log("Result of sum is : " + data)
}
function displayResultPassive(data){
    console.log("Sum's result is : "+ data)
}

//Condition - You are allowed to call one function only 
//Task - display result of sum
const ans = sum(1,2)
console.log(ans)






// Solution :
function sum(num1,num2, fnToCall){
    let result = num1 + num2
    fnToCall(result)
}
function displayResult(data){
    console.log("Result of sum is : " + data)
}
function displayResultPassive(data){
    console.log("Sum's result is : "+ data)
}

//Condition - You are allowed to call one function only 
//Task - display result of sum
const ans = sum(1,2,displayResult)



 
//callbacks
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,fn){
    const v1 = fn(a);
    const v2 = fn(b);
    return v1+v2;
}
const ans = sumOfSomething(1,2,cube)
console.log(ans)