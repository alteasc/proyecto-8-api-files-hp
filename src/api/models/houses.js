const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      enum: ['Gryffindor', 'Slythering', 'Ravenclaw', 'Hufflepuff']
    },
    img: { type: String, require: true },
    fundador: { type: String, required: true },
    animal: { type: String, required: true },
    jefe: { type: String, required: true },
    fantasma: { type: String, required: true },
    folder: { type: String, required: true, enum: ['houses', 'students'] },
    alumnos: [{ type: mongoose.Types.ObjectId, ref: 'students' }]
  },
  {
    timestamps: true,
    collection: 'houses'
  }
)

const House = mongoose.model('houses', houseSchema, 'houses')

module.exports = House
