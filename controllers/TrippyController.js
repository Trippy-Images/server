const deepai = require('deepai')

class TrippyController {
  static async generate(req, res, next) {
    try {
      const {images} = req.body

      deepai.setApiKey(process.env.DEEPAI_KEY);
      var resp = await deepai.callStandardApi("neural-style", {
        style: images[0],
        content: images[1],
      })
      res.status(200).json({style: images[0], content: images[1], result: resp})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TrippyController