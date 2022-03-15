const mongoose = require('mongoose')


const adminSchema = mongoose.Schema({
    username : {
        type: String,
        minlength : 3  , 
        maxlength : 50 ,
        require : true
    },

    password  : {
        type: String,
        minlength : 5 ,  
        maxlength : 50 ,
        require : true
    } ,
    role : {
        type: String ,
        default: 'admin'
    }
})



module.exports = mongoose.model('Admin' , adminSchema)