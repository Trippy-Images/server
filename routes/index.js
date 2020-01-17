const router = require('express').Router()
const userRoutes = require('./users')
const imageResultRoutes = require('./imageResult');
const trippyRoutes = require('./trippy')
const {authenticate} = require('../middlewares/auth')

router.use('/', userRoutes)
router.use('/imageResult', imageResultRoutes)
router.use('/trippy', authenticate, trippyRoutes)

module.exports = router