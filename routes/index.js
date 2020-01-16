const router = require('express').Router()
const userRoutes = require('./users')
const trippyRoutes = require('./trippy')

router.use('/', userRoutes)
router.use('/trippy', trippyRoutes)

module.exports = router