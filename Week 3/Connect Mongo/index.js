const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())


mongoose.connect(
    "mongodb+srv://danejsakshi3:FAPMWtrWMRt5KkOh@cluster0.htxwohv.mongodb.net/"
);

const User = mongoose.model('Users', {
    name: String,
    username: String,
    password: String
});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email : username});
    if(existingUser){
        return res.status(400).send("Username exists.")
    }
})

const user = new User({
    name: name,
    username: username,
    password: password
});

user.save()
    .then(() => {
        console.log('User saved successfully');
        mongoose.connection.close(); // Close the connection after saving
    })
    .catch(error => {
        console.error('Error saving user:', error);
        mongoose.connection.close(); // Close the connection in case of an error
    });
