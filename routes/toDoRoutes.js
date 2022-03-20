const express = require('express');

const toDoController = require('../controllers/toDoControllers');

const router = express.Router();

router.route("/").get(toDoController.getAllTasks).post(toDoController.createTask);

module.exports = router;
