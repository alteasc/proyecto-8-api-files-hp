const cloudinary = require('cloudinary').v2

const deleteFile = (url) => {
  const imgSplited = url.split('/')

  const folderName = imgSplited.at(-3)

  const subfolderName = imgSplited.at(-2)

  const fileName = imgSplited.at(-1).split('.')[0]

  cloudinary.uploader.destroy(
    `${folderName}/${subfolderName}/${fileName}`,
    () => {
      console.log('Imagen destruida de cloudinary')
    }
  )
}

module.exports = { deleteFile }
