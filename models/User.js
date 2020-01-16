const {Schema, model} = require('mongoose')
const {hash} = require('../helpers/bcrypt')

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email needed for creating account'],
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email format!'],
    validate: {
      validator(email) {
        return User.findOne({
          email
        })
        .then( user => {
          return user ? false : true
        })
      },
      message: 'Email already registered'
    }
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty']
  }
})

userSchema.pre('save', function(next) {
  this.password = hash(this.password)
  next()
})

const User = model('User', userSchema)
module.exports = User