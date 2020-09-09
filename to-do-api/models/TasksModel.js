const mongoose = require('mongoose');

const taskSchema =  new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Tasks should contain text'],
  }
});


const Task  = mongoose.model('Task', taskSchema);



module.exports = Task;