'use strict'

const imageResultController = require('../controllers/imageResultController')

const router = require('express').Router()

router.post('/', imageResultController.saveResult)
router.get('/', imageResultController.getAllImageResult)

module.exports = router