const { ALL } = require('dns');
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();

app.use(express.json());

//in memory users 
const ALL_USERS = [
    {
            username : "abc@gmail.com",
            password : "abc123",
            name : "abc"
    },
    {
            username : "xyz@gmail.com",
            password : "xyz123",
            name : "xyz"
    },
    {
            username : "pqr@gmail.com",
            password : "pqr123",
            name : "pqr"
    }
]

function userExists(username,password){
    let userExists = false;
    for(let i = 0 ; i < ALL_USERS.length; i++){
        if(username === ALL_USERS[i].username && password === ALL_USERS[i].password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"incorrect credentials"
        });
    }

    //else part
    var token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token,
    });
})


app.get("/users",function(req,res){
    const token = req.headers.authorization;
    // try{
    //     const decoded = jwt.verify(token,jwtPassword);
    //     const username = decoded.username;
    // }
    // catch(err){
    //     return res.status(403).json({
    //         msg:"invalid token",
    //     });
    // }

    const decoded = jwt.verify(token,jwtPassword);
    const username = decoded.username;
    res.json({
        users : ALL_USERS.filter(function(value){
            if(value.username == username){
                return false
            }
            else{
                return true;
            }
        })
    })
});

// Start the server
app.listen(3000, () => {
    console.log("App listening on port 3000");
  });
  








//in-built jwt functions
// jwt.verify
// jwt.sign