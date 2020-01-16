'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageResultSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    style: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }

}, { versionKey: false, timestamps: { createdAt: 'createdAt', updatedAt: 'updateAt' } })

const ImageResults = mongoose.model('ImageResults', imageResultSchema)

module.exports = ImageResults