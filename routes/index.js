const router = require('express').Router()
const userRoutes = require('./users')
const imageResultRoutes = require('./imageResult');

router.use('/', userRoutes)
router.use('/imageResult', imageResultRoutes)

module.exports = router