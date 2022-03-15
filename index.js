const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const appRouter = require('./router')
const cors = require('cors')

app.use(cors())


//Bazaga bog'lanish
const url = `mongodb+srv://theBest:1020@cluster0.m79kn.mongodb.net/clinic`;

const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    
    
app.use('/',appRouter)


const port = process.env.PORT || 5000

app.listen(port , () => {
    console.log(`${port} chi port ishga tushdi`)
})
