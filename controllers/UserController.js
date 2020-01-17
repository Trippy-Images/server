const User = require('../models/User')
const {generateToken} = require('../helpers/jwt')
const {compare} = require('../helpers/bcrypt')

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
  static async login(req, res, next) {
    try {
      const {email, password} = req.body
      let user = await User.findOne({email})
      if (!user || !compare(password, user.password)) {
        next({ status: 404, message: 'Invalid Email or Password' })
      } else {
        let token = generateToken({ id: user._id })
        res.status(200).json({token})
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController