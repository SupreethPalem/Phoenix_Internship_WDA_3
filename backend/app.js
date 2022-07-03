const Express= require('express')
const Cors= require('cors')
const Mongoose= require('mongoose')
const Cookie= require('cookie-parser')

const app = Express()

// mongo db connection

Mongoose.connect('mongodb://localhost:27017/database1',{useNewUrlParser:true}).then(()=>{
    console.log('Mongo DB Connected')
}).catch(err=>(console.log(err)))


var server=app.listen(7000,()=>{console.log('Server is running on port %d',server.address().port)})


var options ={
    origin : 'http://localhost:4200',
    methods :'GET ,POST ,PUT ,DELETE',
    Credentials : true
}
require('./models/model')
app.use(Express.json())
app.use(Express.urlencoded({extended : true}))
app.use(Cookie())
app.use(Cors(options))
app.use('/api',require('./routes/api'))

//importing models into app


module.exports = app