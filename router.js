const express = require('express');
const router = express.Router();

//1
// http://localhost:5000
const adminRouter = require('./admin/admin.router')
router.use('/admin', adminRouter)

//2
//http://localhost:5000/doctor
const doctorRouter = require('./doctor/doctor.router')
router.use('/doctor', doctorRouter)

//3
// http://localhost:5000/klent
const klentRoutes = require('./klent/krouter')
router.use('/klent', klentRoutes)


module.exports = router