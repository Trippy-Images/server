const bcrypt = require('bcryptjs')

module.exports = {
  hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(6))
  },
  compare(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}