const House = require('../../api/models/houses')
const { deleteFile } = require('../../utils/deleteFile')

const getHouses = async (req, res, next) => {
  try {
    const allHouses = await House.find().populate('alumnos')
    return res.status(200).json(allHouses)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getHouseByName = async (req, res, next) => {
  try {
    const { nombre } = req.params

    const house = await House.find({ nombre }).populate('alumnos')
    return res.status(200).json(house)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postHouse = async (req, res, next) => {
  try {
    const newHouse = new House({
      nombre: req.body.nombre,
      fundador: req.body.fundador,
      animal: req.body.animal,
      jefe: req.body.jefe,
      fantasma: req.body.fantasma,
      folder: req.body.folder,
      alumnos: req.body.alumnos
    })

    if (req.file) {
      newHouse.img = req.file.path
    }

    const houseSaved = await newHouse.save()

    return res.status(200).json(houseSaved)
  } catch (error) {
    return res.status(400).json('Ha fallado la creación del dato')
  }
}

const updateHouse = async (req, res, next) => {
  try {
    const { id } = req.params
    const newHouse = new House(req.body)
    newHouse._id = id

    if (req.file) {
      newHouse.img = req.file.path
      const oldHouse = await House.findById(id)
      deleteFile(oldHouse.img)
    }

    const houseUpdated = await House.findByIdAndUpdate(id, newHouse, {
      new: true
    })

    return res.status(200).json(houseUpdated)
  } catch (error) {
    return res.status(400).json('No se ha podido actualizar la casa')
  }
}

const deleteHouse = async (req, res, next) => {
  try {
    const { id } = req.params
    const houseDeleted = await House.findByIdAndDelete(id)
    deleteFile(houseDeleted.img)
    return res.status(200).json(houseDeleted)
  } catch (error) {
    return res.status(400).json('No se ha podido eliminar correctamente')
  }
}

module.exports = {
  getHouses,
  getHouseByName,
  postHouse,
  updateHouse,
  deleteHouse
}
