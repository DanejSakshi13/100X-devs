const mongoose = require('mongoose');
const { boolean } = require('zod');

const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://danejsakshi:danejsakshipaytm@cluster0.77t4reh.mongodb.net/')
    .then(()=>console.log("DB connected!"));


const userSchema = new Schema({
    firstName : String,
    lastName : String,
    username : String,
    password : String
})


const AccountSchema = new Schema({
    userId : mongoose.Schema.Types.ObjectId,
    balance : Number
})


const Users = mongoose.model('Users',userSchema);
const Account = mongoose.model('Account', AccountSchema);


module.exports = {
    Users,
    Account
}