const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const router = new Router();

router.get('/all', require('../controller/municipalityController/getAllMunicipality'));

router.post('/add', require('../controller/municipalityController/addMunicipality'));

module.exports = router;