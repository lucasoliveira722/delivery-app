const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login/index');
const userRouter = require('./user/index');
const categoriesRouter = require('./categories/index');
const postRouter = require('./post/index');

const router = express.Router();

router.use(bodyParser.json());
router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;
