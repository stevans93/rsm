const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const upload = require('../midleweare/upload');
const router = new Router();

router.get('/all', require('../controller/userController/getAllUsers'));
router.post('/upload-image', upload.single('file'), require('../controller/userController/uploadImage'));

module.exports = router;