const deepai = require('deepai')

class TrippyController {
  static async generate(req, res, next) {
    try {
      deepai.setApiKey(process.env.DEEPAI_KEY);
      var resp = await deepai.callStandardApi("neural-style", {
        style: req.body.image1[0],
        content: req.body.image2[0],
      })
      res.status(200).json({style: req.body.image1[0], content: req.body.image2[0], result: resp.output_url})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TrippyController