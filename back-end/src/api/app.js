const express = require("express");
const login = require("../controllers/login.controller");
const errorMiddleware = require("../middlewares/errorMiddleware");
const loginRouter = require("../routes/login");

const app = express();
const router = require('../routes/index');


app.get("/coffee", (_req, res) => res.status(418).end());
app.use(loginRouter);
app.use(errorMiddleware);

module.exports = app;
