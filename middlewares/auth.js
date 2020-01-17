const User = require('../models/User')
const {verifyToken} = require('../helpers/jwt')

module.exports = {
  async authenticate(req, res, next) {
    try {
      const { id } = verifyToken(req.headers.token)
      let user = await User.findById(id)
      if (user) {
        req.decoded = id
        next()
      } else {
        next({status:404, message: 'User not found'})
      }
    } catch (error) {
      next(error)
    }
  }
}