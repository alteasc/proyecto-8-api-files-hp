const cloudinary = require('cloudinary').v2

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      api_key: process.env.CLOUDINARY_API_KEY
    })
    console.log('Se ha conectado con cloudinary')
  } catch (error) {
    console.log('No se ha podido conectar con cloudinary')
  }
}

module.exports = { connectCloudinary }
