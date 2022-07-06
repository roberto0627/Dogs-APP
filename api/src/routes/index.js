const { Router } = require('express');
const dogs = require('./dogs')
const dogsIdRaza = require('./dogsIdRaza')
const postDog = require('./postDog')
const temperament = require('./temperament')
const dogNames = require('./dogNames')
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogs)

router.get('/dogs/:idRaza', dogsIdRaza)

router.post('/dog', postDog)

router.get('/temperament', temperament)

router.get('/dogNames', dogNames)

module.exports = router;



