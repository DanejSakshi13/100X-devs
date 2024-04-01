
function printSomething(){                     //function (boundary)
    let p = new Promise(function(resolve){     //initialise promise
        resolve("Hello World");                //text to print (resolve promise)
    })
    return p;                                  //return promise
}

function main(){                               //another function
    printSomething().then(function(val){       //call first function in main
        console.log(val)
    })
}
main();                                        //call main









//same function using async await
function doSomething(){
    let p = new Promise(function(res){
        res("Hola!")
    })
    return p;
}
async function main2(){
    //no callbacks no .then syntax
    let value = await doSomething();
    console.log(value)
}
main2();