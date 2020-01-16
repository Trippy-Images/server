const gcsUpload = require('gcs-upload')

const upload = gcsUpload({
  gcsConfig: {
    keyFilename: process.env.GCS_KEYFILE,
    bucketName: process.env.GCS_BUCKET
  }
})

module.exports = upload