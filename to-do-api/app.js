const express = require('express');
const toDoListRouter = require('./routes/toDoListRouter');
const morgan = require('morgan');
const Task = require('./models/TasksModel');
const app = express();
const cors = require('cors');
const globalErrorHandler = require('./controller/errorController');


if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());
app.use(cors({origin:`http://localhost:${3000 || 3001}`, credentials: true}));

const testTask = new Task({
  name: 'Go to the store'
});

// testTask.save().then(doc => {
//   console.log(doc)
// }).catch(err => console.log(err));

app.use('/api/v1/toDoList',toDoListRouter);

app.all('*', (req, res, next) =>{
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  })
});

app.use(globalErrorHandler);



module.exports = app;
