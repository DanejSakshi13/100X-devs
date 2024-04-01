/*Write a function that takes a callback as an argument and calls it after a short delay (e.g., 1 second). */

function first(callback){
    console.log("Hello")
    setTimeout(callback,1000)
}

function callback(){
    console.log("World")
}

first(callback)