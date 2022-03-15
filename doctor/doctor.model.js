const mongoose = require('mongoose')
const doctorSchema = mongoose.Schema({
    fullname_doc : {
        type: String,
        require : true
    }, 
    ish_turi : {
        type: String,
        require : true
    },
    tel : {
        type :String,
        require : true
    },
    login_d : {
        type: String,
        require : true
    },
    parol_d  : {
        type: String,
        require : true
    },  
    adress: {
        type: String,
    },
    year : {
        type: String,
    },    
    role : {
        type: String,
        default: 'user'
     
    },
})



module.exports = mongoose.model('Doctor' , doctorSchema)