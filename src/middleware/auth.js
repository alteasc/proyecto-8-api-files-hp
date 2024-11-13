const Student = require('../api/models/student')
const { verifyJwt } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const student = await Student.findById(id)

    student.password = null
    req.student = student
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

const isPrefecto = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const student = await Student.findById(id)
    console.log(student.casa.nombre)

    if (student.rol === 'prefecto') {
      student.password = null
      req.student = student
      next()
    } else {
      return res
        .status(400)
        .json('Esta acción sólo la pueden realizar los prefectos')
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

module.exports = { isAuth, isPrefecto }
