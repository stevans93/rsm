const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const router = new Router();
const upload = require("../midleweare/upload");
const compressUserImage = require("../midleweare/compressUserImage");

router.post('/register', upload.single('image'), compressUserImage, require('../controller/authController/register'));

router.post('/login', require('../controller/authController/login'));

module.exports = router;