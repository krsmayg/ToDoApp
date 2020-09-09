const express = require('express');
const toDoListRouter = require('./routes/toDoListRouter');
const morgan = require('morgan');
const Task = require('./models/TasksModel');
const app = express();
// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());
app.use((req, res,next) => {
  console.log('Hello from Midlleware');
  next();
})

const testTask = new Task({
  name: 'Go to the store'
});

// testTask.save().then(doc => {
//   console.log(doc)
// }).catch(err => console.log(err));

app.use('/api/v1/toDoList',toDoListRouter);


module.exports = app;
