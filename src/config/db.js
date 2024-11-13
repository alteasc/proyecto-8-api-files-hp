const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectado exitósamente con la BBDD 👍🏻👍🏻👍🏻')
  } catch (error) {
    console.log('No se ha conectado con la BBDD 👎🏻👎🏻👎🏻')
  }
}

module.exports = { connectDB }
