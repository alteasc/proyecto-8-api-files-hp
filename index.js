require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const { connectCloudinary } = require('./src/config/cloudinary')
const houseRoutes = require('./src/api/routes/houses')
const studentRoutes = require('./src/api/routes/students')

const app = express()

connectDB()
connectCloudinary()

app.use(express.json())

app.use('/api/v1/casas', houseRoutes)
app.use('/api/v1/alumnos', studentRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servido activo en: http://localhost:3000')
})
