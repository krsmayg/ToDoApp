import axiosData from '../api/axiosConfig';
import axios from 'axios'
import {FETCH_TASKS,CREATE_TASK} from '../actions/actionTypes';

export const fetchTasks = () => async dispatch => {
    let tasks = [];
    console.log('fetch tasks')
    await axiosData.get('/toDoList').then(res => {
      tasks = res.data.data.tasks;
      console.log(tasks);
    });
    dispatch({ type: FETCH_TASKS, payload: tasks });
}
