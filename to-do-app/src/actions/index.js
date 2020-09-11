import axiosData from '../api/axiosConfig';
import {FETCH_TASKS,CREATE_TASK,DELETE_TASK, UPDATE_TASK} from '../actions/actionTypes';

export const fetchTasks = () => async dispatch => {
    let tasks = [];
    await axiosData.get('/toDoList').then(res => {
      tasks = res.data.data.tasks;
    });
    dispatch({ type: FETCH_TASKS, payload: tasks });
}

export const createTask = (newTask) => async dispatch => {
  let task = {}
  await axiosData.post('/toDoList', {name: newTask}).then(res => {
    task =  res.data.data.task;
  });
  dispatch({ type: CREATE_TASK, payload: task });
}

export const deleteTask = (id) => async dispatch => {
  await axiosData.delete(`/toDoList/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
}
export const updateTask = (id, updatedTask) => async dispatch => {
  await axiosData.patch(`/toDoList/${id}`, {
    name: updatedTask
  });
  dispatch({ type: UPDATE_TASK, payload: {id , updatedTask} });
}
