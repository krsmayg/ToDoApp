import axiosData from '../api/axiosConfig';
import axios from 'axios'
import {FETCH_TASKS,CREATE_TASK} from '../actions/actionTypes';

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

