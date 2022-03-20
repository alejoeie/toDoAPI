const express = require('express');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
const morgan = require('morgan');

app.use(express.json());

app.use("/api/main/tasks", toDoRoutes);

module.exports = app;
