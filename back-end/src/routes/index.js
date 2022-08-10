const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login/index');
const userRouter = require('./user/index');
const productRouter = require('./product/index');
const saleRouter = require('./sale');

const router = express.Router();

router.use(bodyParser.json());
router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/sales', saleRouter);

module.exports = router;
