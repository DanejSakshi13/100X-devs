const express = require("express")
const port = 3001
const app = express();

var users = [{
    name: "Sakshi",
    kidney : [{
        healthy : false    //default
    }]
}];

app.use(express.json())
// console.log(users[0])

//check how many healthy kidneys
//common/popular inputs - query parameters
app.get('/',function(req,res){
    const sakKidneys = users[0].kidney;
    const numOfKidneys = sakKidneys.length;
    let numOfHealthyKidneys = 0 ;
    for(let i = 0; i < sakKidneys.length; i++){
        if(sakKidneys[i].healthy){
            numOfHealthyKidneys = numOfHealthyKidneys + 1;
        }
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
    console.log(sakKidneys)
})

//add new kidney
//body is passed 
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;  //req.body gives undefined
    users[0].kidney.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done"
    })
}) 

//replace unhealthy kidney and make it healthy
app.put('/',function(req,res){
    for(let i = 0 ; i < users[0].kidney.length; i++){
        users[0].kidney[i].healthy = true;
    }
    res.json({});
})

//remove a kidney
app.delete('/',function(req,res){
    const newKidneys = [];
    for(let i = 0 ; i < users[0].kidney.length; i++){
        if(users[0].kidney[i].healthy) {
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidney = newKidneys;
    res.json({msg:"Done"})
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });