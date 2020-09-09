const toDoController = require('../controller/toDoController');
const express = require('express');
const router = express.Router();
router
  .route('/')
  .get(toDoController.getToDoList)
  .post(toDoController.createToDoItem)

router
  .route('/:id')
  .patch(toDoController.updateToDoItem)
  .delete(toDoController.deleteToDoItem)
  .get(toDoController.getToDoItem)



module.exports = router;