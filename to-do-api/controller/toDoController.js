const Task = require('../models/TasksModel');

exports.getToDoList = async (req, res, next) => {
 try {
  const tasks = await Task.find();
  res.status(200).json({ 
    status: 'success',
    reults: tasks.length,
    data: {
      tasks
    }
  });
 } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
 }

}


exports.createToDoItem = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({ 
      status: 'success',
      data: {
        task: newTask
      }
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
  }
}

exports.updateToDoItem = async (req, res, next) => {
  try {
    console.log("AOAOAO TRYY")
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({ 
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
  }
}

exports.deleteToDoItem = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.status(204).json({ 
      status: 'success',
      data: null,
      message: ''
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
  }
}
exports.getToDoItem = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    res.status(200).json({ 
      status: 'success',
      data: {
        task: task
      },
      message: ''
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
  }
}