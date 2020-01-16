'use strict'

const ImageResult = require('../models/imageResult')

class ImageResultController {

    static saveResult(req, res, next) {

        const { id } = req.decoded
        const { style, content, result } = req.body

        ImageResult.create({
            user: id,
            style,
            content,
            result
        })
            .then(imageResult => res.status(201).json({
                message: 'result saved',
                imageResult
            }))
            .catch(next)
    }
}

module.exports = ImageResultController