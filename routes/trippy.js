const router = require('express').Router()
const TrippyController = require('../controllers/TrippyController')
const gcsUpload = require('../middlewares/gcsUpload')

router.post('/', gcsUpload.array('images') ,TrippyController.generate)

module.exports = router