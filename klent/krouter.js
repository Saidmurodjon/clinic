const express = require('express')
const router = express.Router()

const klentController = require('./kcontroller')

// Get http://localhost:5000/klent
router.route('/').get(klentController.getklent)


// Post http://localhost:5000/klent
router.route('/').post(klentController.addklent)

// Put http://localhost:5000/klent
router.route('/:id').patch(klentController.apdateklent)

// Delete http://localhost:5000/user
router.route('/:id').delete(klentController.deleteklent)

module.exports = router;