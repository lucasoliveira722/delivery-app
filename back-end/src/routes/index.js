const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login/index');

const router = express.Router();

router.use(bodyParser.json());
router.use('/login', loginRouter);

module.exports = router;
