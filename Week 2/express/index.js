const express = require("express");
const bodyParser = require("body-parser")
const port = 3000;
const app = express()
app.use(bodyParser.json());

//simple get method
app.get('/',function(req,res){
    res.send("Hello world")
})

//sending json in simple get method
app.get('/pageone',function(req,res){
    res.json({
        name : 'Sakshi',
        age : 20
    })
})

//sending html in simple get method
app.get('/html',function(req,res){
    res.send('<h1>Hello Sakshi</h1>')
})

// post method
app.post('/postmethod',function(req,res){
    res.send({
        msg : "2+2=4"
    })
})

// post method that prints auth header
app.post('/auth',function(req,res){
    console.log(req.headers["authorization"])
    res.send({
        msg : "I am Sakshi"
    })
})

// post method to access body
//body cannot be accessed - it needs to be parsed
app.post('/authBody',function(req,res){
    console.log(req.body);
    res.send({
        msg : "I am Sakshi"
    })
})

//function to add two numbers 
function sum(a,b){
    return a+b;
}
app.get('/summ',function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = sum(a,b);
    res.send(ans)
})
//if query is used, you need to give input from url 
//for eg : http:3000/summ/?a=3


//to print on console
app.listen(port,function(){
    console.log(`listening on port ${port}`)
})

