const { generateSign } = require('../../config/jwt')
const { deleteFile, copyFile } = require('../../utils/deleteFile')
const Student = require('../models/student')
const bcrypt = require('bcrypt')

const getStudents = async (req, res, next) => {
  try {
    const allStudents = await Student.find().populate('casa')
    return res.status(200).json(allStudents)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getStudentsByHouse = async (req, res, next) => {
  try {
    const { casa } = req.params
    const studentsByHouse = await Student.find({ casa }).populate('casa')
    return res.status(200).json(studentsByHouse)
  } catch (error) {
    return res.status(400).json('Ha fallado la búsqueda')
  }
}

const register = async (req, res, next) => {
  try {
    const newStudent = new Student({
      nombre: req.body.nombre,
      password: req.body.password,
      curso: req.body.curso,
      rol: 'user',
      folder: req.body.folder
    })

    const duplicateStudent = await Student.findOne({ nombre: req.body.nombre })

    if (duplicateStudent) {
      return res.status(400).json('Este nombre de alumno ya existe')
    }

    if (req.file) {
      newStudent.imagen = req.file.path
    }

    const studentSaved = await newStudent.save()

    return res.status(201).json(studentSaved)
  } catch (error) {
    return res.status(400).json('No se ha podido registrar a este alumno')
  }
}

const login = async (req, res, next) => {
  try {
    const student = await Student.findOne({ nombre: req.body.nombre })

    if (!student) {
      return res.status(400).json('El usuario es incorrecto')
    }

    if (bcrypt.compareSync(req.body.password, student.password)) {
      const token = generateSign(student._id)
      return res.status(200).json({ student, token })
    } else {
      return res.status(400).json('La contraseña está mal')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const newStudent = new Student(req.body)
    newStudent._id = id

    if (req.file) {
      newStudent.imagen = req.file.path
      const oldStudent = await Student.findById(id)
      deleteFile(oldStudent.imagen)
    }

    const studentUpdated = await Student.findByIdAndUpdate(id, newStudent, {
      new: true
    })
    return res.status(200).json(studentUpdated)
  } catch (error) {
    return res.status(400).json('No se ha podido actualizar el alumno')
  }
}

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const studentDeleted = await Student.findByIdAndDelete(id)
    deleteFile(studentDeleted.imagen)
    return res.status(200).json(studentDeleted)
  } catch (error) {
    return res.status(400).json('No se ha podido eliminar el alumno')
  }
}

module.exports = {
  getStudents,
  getStudentsByHouse,
  register,
  login,
  updateStudent,
  deleteStudent
}
