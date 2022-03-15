const express = require('express');
const router = express.Router();
const doctorController = require('./doctor.controller')


// Get  http://localhost:5000/doctor
router.route('/').get(doctorController.getDoctor)

// post  http://localhost:5000/doctor
router.route('/').post(doctorController.addDoctor)


//Put http:localhost:5000/doctor/:admin_id
router.route('/:doctor_id').patch(doctorController.updateDoctor)



//delete http:localhost:5000/doctor/:admin_id
router.route('/:doctor_id').delete(doctorController.deleteDoctor)

module.exports = router