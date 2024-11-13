const { isPrefecto } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getHouses,
  postHouse,
  updateHouse,
  deleteHouse,
  getHouseByName
} = require('../controllers/houses')

const houseRoutes = require('express').Router()

houseRoutes.get('/', getHouses)
houseRoutes.get('/:nombre', getHouseByName)
houseRoutes.post('/', [isPrefecto], upload.single('img'), postHouse)
houseRoutes.put('/:id', [isPrefecto], upload.single('img'), updateHouse)
houseRoutes.delete('/:id', [isPrefecto], deleteHouse)

module.exports = houseRoutes
