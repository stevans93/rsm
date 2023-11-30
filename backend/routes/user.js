const { Router } = require('express');
const verifyToken = require('../midleweare/verifyToken');
const router = new Router();

router.get('/all', require('../controller/userController/getAllUsers'));

module.exports = router;