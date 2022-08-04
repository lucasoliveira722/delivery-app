const express = require("express");
const login = require("../controllers/login.controller");
const errorMiddleware = require("../middlewares/errorMiddleware");

const app = express();
const router = require('../routes/index');


app.get("/coffee", (_req, res) => res.status(418).end());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
