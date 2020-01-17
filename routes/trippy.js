const router = require('express').Router()
const TrippyController = require('../controllers/TrippyController')
const gcsUpload = require('../middlewares/gcsUpload')

router.post('/', gcsUpload.fields([{name:'image1'}, {name:'image2'}]) ,TrippyController.generate)

module.exports = router