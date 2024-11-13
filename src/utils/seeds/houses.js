const mongoose = require('mongoose')
const House = require('../../api/models/houses')
const houses = require('../../data/houses')

mongoose
  .connect(
    'mongodb+srv://asc-api-rest-files-hp:fpXn249bn2khObxB@cluster0.t2eud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allHouses = await House.find()
    if (allHouses.length) {
      await House.collection.drop()
    }
    console.log('Se ha borrado lo que había en la colección Casas')
  })
  .catch((error) => console.log(`Error borrando datos: ${error}`))
  .then(async () => {
    await House.insertMany(houses)
    console.log('Se han insertado los datos de las casas')
  })
  .catch((error) => console.log(`Error insertando datos: ${error}`))
  .finally(() => mongoose.disconnect())
