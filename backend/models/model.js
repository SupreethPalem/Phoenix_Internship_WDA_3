const mongoose = require('mongoose')
const schema = mongoose.Schema
// user colection schema

const userSchema =new schema({
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    FirstName : {type:String, required:true},
    MiddleName : {type:String, required:true},
    LastName : {type:String, required:true},
    Gender : {type:String, required:true},
    Dob : {type:String, required:true},

})

mongoose.model('User' , userSchema)