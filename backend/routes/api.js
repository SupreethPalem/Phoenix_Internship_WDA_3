const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//creating am object of model variable
var User = mongoose.model('User')
//api to host user information

router.post('/postUserInfo', (request , responce)=>{
    var body= request.body
    console.log(body)
    var user = new User(body)
    console.log(user)
    user.save().then(data=>{
        responce.status(200).send(data)

    }).catch(err=>{
        console.log(err)
        responce.status(500).send(err)
    })
})
router.get('/getUserInfo', (request , responce)=>{
    User.find().then(data=>{
        responce.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        responce.status(500).send(err)
        
    })
})
 router.get('/getUserById/:id',(request , responce)=>{
    User.find({"id":request.params.id}).then(data=>{
        responce.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        responce.status(500).send(err)
        
    })})



    router.put('/putUserById/:id', (request , responce)=>{
        var body =request.body
        console.log('in api')
        User.updateOne({"_id":request.params.id}, {$set:body}).then(data=>{
            responce.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        responce.status(500).send(err)
        
        })
    })

module.exports=router