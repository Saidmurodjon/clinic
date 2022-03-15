const Doctor = require('./doctor.model')

//Get http://localhost:5000/doctor
async function getDoctor(req , res){
    try {
        const doctors = await Doctor.find({})
        res.status(200).send(doctors)
    } catch (err) {
        res.status(404).send(err)
    }
}

//post http://localhost:5000/doctor

async function addDoctor(req , res) {
    try{
        let doctor = await Doctor.create(req.body)
        return res.status(200).json(doctor)
    } catch (err){
        return res.status(400).send(err)
    }
}

//Put http://localhost:5000/doctor/:admin_id
async function updateDoctor(req, res ){
    try{
        const doctorId = req.params.doctor_id
        await Doctor.findByIdAndUpdate(doctorId , req.body)
        return res.status(200).json('sorov amalga oshdi')
    } catch (err){
        return res.status(400).send(err)
    }
}

//Delete http://localhost:5000/doctor/:doctor_id

async function deleteDoctor(req,res){
    try{
        const doctorId = req.params.doctor_id
        await Doctor.findByIdAndDelete(doctorId)
        return res.status(200).json('Doctor ochirildi id')
    } catch (err){
        return res.status(400).send(err)
    }
}



module.exports = {
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor
}