const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const upload = require('../midleweare/upload');
const compressImages = require('../midleweare/compressUserImage');
const router = new Router();

router.get('/all', require('../controller/municipalityController/getAllMunicipality'));

router.post('/add', upload.single('file'), compressImages, require('../controller/municipalityController/addMunicipality'));

module.exports = router;