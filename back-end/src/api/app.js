require('express-async-errors');
const express = require('express');
const errorMiddleware = require('../middlewares/errorMiddleware');
const router = require('../routes/index');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
