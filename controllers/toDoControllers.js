const Task = require('../models/todoModels');

exports.getAllTasks = async (req, res) => {
    try{
        const task = await Task.find();
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        })
    } catch (err){
        res.status(404).json({
            status: 'fail',
            message: 'Tasks have not been found'
        })
    }
}

exports.createTask = async (req, res) => {
    try{
        const newTask = await Task.create(req.body);

        res.status(200).json({
            status:'success',
            data: {
                newTask
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'A new task cannot be created'
        })

    }
}