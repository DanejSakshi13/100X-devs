//promise needs to have function as its first arugment and resolve as the first argument of the function

var p = new Promise(function(resolve){
    resolve("Hello there!");
})
p.then(function(){
    console.log(p)
})

//async function with promises
function printSomething(){
    let pr = new Promise(function(reso){
        reso("hello world")
    });
    return pr;
}
const value = printSomething();
value.then(function(data){
    console.log(data)
})



//async function(setTimeout) with promises 
function printSomething(){
    let pr = new Promise(function(reso){
        setTimeout(reso,6000);
    });
    return pr;
}
const val = printSomething();
val.then(function(){
    console.log("Hello")
})