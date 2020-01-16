const router = require('express').Router()
const userRoutes = require('./users')
const imageResultRoutes = require('./imageResult');
const trippyRoutes = require('./trippy')
const trippyRoutes = require('./trippy')

router.use('/', userRoutes)
router.use('/imageResult', imageResultRoutes)
router.use('/trippy', trippyRoutes)

module.exports = router