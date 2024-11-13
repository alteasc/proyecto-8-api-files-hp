# API para alumnos sobre las Casas de Hogwarts 🏰

Con esta API se pretende crear una base de datos informativa en la que los alumnos se registren con sus datos más básicos y se puedan consultar datos de las diferentes casas que componen a la escuela de Hogwarts.

## Librerías instaladas para el desarrollo del proyecto 📚

A las librerías ya conocidas como DOTENV, MONGOOSE o EXPRESS entre otras, en este caso se han unido el uso de otras relevantes como:

- MULTER: para el envío de datos en multipart-formdata
- MULTER - STORAGE - CLOUDINARY: para el correcto almacenamiento de archivos en formato diferente a JSON, necesarios para esta API.

Ejemplo de instalación de estas librerías

```sh
cd proyecto-8-api-files-hp
npm i multer multer-storage-cloudinary
```

## Instalación 🔧

Para trabajar, en el archivo `${package.json.version}` se crean tres scripts, dos de ellos al comienzo para poder trabajar cómodamente y el tercero referente a la "semilla" de una de las colecciones de la BBDD:

```sh
"dev": "nodemon index.js"
"seed": "node ./src/utils/seeds/houses.js"
```

## Desarrollo del proyecto ⚙️

Se ha levantado el servidor en: http://localhost:3000
Se han realizado dos colecciones de datos:

- Houses: se almacenan los datos más relevantes de las casas de Hogwarts
  "/api/v1/casas"
- Students: se encuentran los datos principales de cada alumno
  "/api/v1/alumnos"

> Note: Teniendo en cuenta esta información, para el acceso a la información se ha diferenciado entre 2 perfiles, que serán <"prefecto" y "user">. En este caso se ha dado más importancia a los prefectos de cada casa que son los que tendrán más acceso a los datos de alumnos y casas."

Partiendo de las rutas anteriores, para las colecciones de HOUSES y STUDENTS se ha realizado el CRUD completo y básico. Concretamente, para la colección "HOUSES":

- Se ha añadido un método GET para consultar los datos de una de las cuatro casas.
  "/:nombre"

Sin embargo, para la colección "STUDENTS", se ha creado un CRUD pero con la particularidad de que los alumnos tengan la posibilidad de hacer "register" y "login" para poder acceder y modificar su información personal.

> Note: Se ha establecido una única relación entre "STUDENTS" y "HOUSES" para que cada alumno disponga de la información relativa a su casa de forma directa.

## Autores ✒️

Desarrolladora: Altea Segura Cáliz para Rock The Code
Documentación: https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki

## License

**Free Software, Hell Yeah!**
