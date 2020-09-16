const express = require('express');
const toDoListRouter = require('./routes/toDoListRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');
const Task = require('./models/TasksModel');
const app = express();
const cors = require('cors');
const globalErrorHandler = require('./controller/errorController');
const mongoSanitize = require('express-mongo-sanitize')

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());
// app.use(cors({origin:`http://localhost:${3000 || 3001}`, credentials: true}));
app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());



app.use(mongoSanitize());
const testTask = new Task({
  name: 'Go to the store'
});

// testTask.save().then(doc => {
//   console.log(doc)
// }).catch(err => console.log(err));

app.use('/api/v1/toDoList',toDoListRouter);
app.use('/api/v1/users/',userRouter);

app.all('*', (req, res, next) =>{
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  })
});

app.use(globalErrorHandler);



module.exports = app;
