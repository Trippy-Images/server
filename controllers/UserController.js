const User = require('../models/User')
const {generateToken} = require('../helpers/jwt')

class UserController {
  static async register(req, res, next) {
    try {
      const {email, password} = req.body
      let user = await User.create({
        email, password 
      })
      let token = generateToken({id: user._id})
      res.status(201).json({token})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController