const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req) => {
    let folder = 'hogwarts'

    if (req.body.folder === 'houses') {
      folder = 'hogwarts/houses'
    } else if (req.body.folder === 'students') {
      folder = 'hogwarts/students'
    }
    return {
      folder: folder,
      allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
  }
})

const upload = multer({ storage })
module.exports = upload
