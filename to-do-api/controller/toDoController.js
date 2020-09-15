const Task = require('../models/TasksModel');
const catchAsync  = require('../utils/catchAsync');
const AppError = require('../utils/appError');
exports.getToDoList = catchAsync(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({ 
    status: 'success',
    reults: tasks.length,
    data: {
      tasks
    }
  });
})


exports.createToDoItem = catchAsync(async (req, res, next) => {
    const newTask = await Task.create(req.body);
    res.status(201).json({ 
      status: 'success',
      data: {
        task: newTask
      }
    });
});

exports.updateToDoItem = catchAsync(async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(!task) {
     return next(new AppError('No document found with that ID', 404))
    }
    res.status(200).json({ 
      status: 'success',
      data: {
        task
      }
    });

});

exports.deleteToDoItem = catchAsync(async (req, res, next) => {
    await Task.findByIdAndDelete(req.params.id)
    res.status(204).json({ 
      status: 'success',
      data: null,
      message: ''
    });
});
exports.getToDoItem = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id)
  if(!task ) {
    return next(new AppError('No document found with that ID', 404))
  }
  res.status(200).json({ 
    status: 'success',
    data: {
      task: task
    },
    message: ''
  });
});