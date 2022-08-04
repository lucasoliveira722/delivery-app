const express = require('express');

const app = express();
const router = require('../routes/index');

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router)

module.exports = app;
