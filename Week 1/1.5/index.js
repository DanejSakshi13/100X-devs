//using fs.readFile (async function)
const fs = require("fs");
//file system : FS

//async call
function sakshiReads(){
    return new Promise(function(resolve){
        fs.readFile("sample.txt","utf-8", function(err,data){
            resolve(data);
        });
    })
}
function onData(data){
    console.log(data)
}
sakshiReads().then(onData);
//console.log("hello") //was executed first





