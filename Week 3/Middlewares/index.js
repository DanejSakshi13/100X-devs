const express = require("express")
const app = express()

// function that returns boolean value
// function isOldEnough(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//middleware
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=18){
        next();
    }
    else{
        res.json({
            msg:"Sorry you are underage"
        })
    }
}

app.get("/ride1",isOldEnoughMiddleware ,function(req,res){
        res.json({
            msg:"Ride1 taken succesfully."
        })
    }
)

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"Ride2 taken succesfully."
    })
}
)









// app.get("/ride1",function(req,res){

//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg:"Ride1 taken succesfully."
//         })
//     }
//     else{
//         res.status(400).json({
//             msg: "Sorry you are underage"
//         })
//     }    
// })






// app.get("/ride2",function(req,res){

//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg:"Ride2 taken succesfully."
//         })
//     }
//     else{
//         res.status(400).json({
//             msg: "Sorry you are underage"
//         })
//     }    
// })

app.listen(3000, () => {
    console.log("App listening on port 3000");
  });
  
