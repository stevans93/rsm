const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const router = new Router();

router.get('/all', require('../controller/municipalityController/getAllMunicipality'));

router.post('/add', require('../controller/municipalityController/addMunicipality'));

router.post('/addBelgrade', require('../controller/municipalityController/addMunicipalityToBelgrade'));

module.exports = router;