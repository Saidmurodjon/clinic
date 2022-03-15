const mongoose = require('mongoose')

const klentSchema = new mongoose.Schema({
    select1: String,
    select2: String,
    select3: String,
    select4: String,
    tooth: String,
    fullname: String,
    age: String,
    tel: String,
    price: String,
    doctor_id: String,
    tolov: {
        type: Boolean,
        default: false
    },
    qoldiq: {
        type: Number,
        default: 0
    },
    nasiya: {
        type: Number,
        default: 0
    },
    time: String,
    qolib : {
        type:Boolean,
        default: false
    },
    shablon : {
        type:Boolean,
        default: false
    },
    primerka : {
        type:Boolean,
        default: false
    },
    tayyor : {
        type:Boolean,
        default: false
    },
    doctor_name: String,
    tish_doctor: String

})
module.exports = mongoose.model('klent', klentSchema)