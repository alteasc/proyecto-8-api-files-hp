const { isPrefecto, isAuth } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getStudents,
  getStudentsByHouse,
  deleteStudent,
  register,
  login,
  updateStudent,
  getStudentsBId
} = require('../controllers/students')

const studentRoutes = require('express').Router()

studentRoutes.get('/', [isPrefecto], getStudents)
studentRoutes.get('/casa/:id', getStudentsByHouse)
studentRoutes.post('/register', upload.single('imagen'), register)
studentRoutes.post('/login', login)
studentRoutes.put('/:id', [isAuth], upload.single('imagen'), updateStudent)
studentRoutes.delete('/:id', [isPrefecto], deleteStudent)

module.exports = studentRoutes
