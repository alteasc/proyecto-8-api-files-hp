const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const studentSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    password: { type: String, required: true },
    casa: { type: mongoose.Types.ObjectId, ref: 'houses' },
    curso: { type: String, required: true },
    imagen: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['prefecto', 'user'],
      default: 'user'
    },
    folder: { type: String, required: true, enum: ['houses', 'students'] }
  },
  {
    timestamps: true,
    collection: 'students'
  }
)

studentSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const Student = mongoose.model('students', studentSchema, 'students')

module.exports = Student
