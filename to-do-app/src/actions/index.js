import axiosData from '../api/axiosConfig';
import {FETCH_TASKS,CREATE_TASK,DELETE_TASK, UPDATE_TASK, LOGIN_USER,SIGNUP_USER} from '../actions/actionTypes';
import Cookies from 'universal-cookie';

export const fetchTasks = () => async dispatch => {
    let tasks = [];
    await axiosData.get('/toDoList').then(res => {
      tasks = res.data.data.tasks;
    });
    dispatch({ type: FETCH_TASKS, payload: tasks });
};

export const createTask = (newTask) => async dispatch => {
  let task = {}
  await axiosData.post('/toDoList', {name: newTask}).then(res => {
    task =  res.data.data.task;
  });
  dispatch({ type: CREATE_TASK, payload: task });
};

export const deleteTask = (id) => async dispatch => {
  await axiosData.delete(`/toDoList/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
};

export const updateTask = (id, updatedTask) => async dispatch => {
  await axiosData.patch(`/toDoList/${id}`, {
    name: updatedTask
  });
  dispatch({ type: UPDATE_TASK, payload: {id , updatedTask} });
};
/////////////////////////////////

export const loginUser = (userData) => async dispatch => {
  let dataResponse = {}
  await axiosData.post('/users/login', {
    email: userData.email,
    password: userData.password
  }).then(res => {
    dataResponse = res.data;
    console.log(res.data);
    const cookies = new Cookies();
    cookies.set('jwt', res.data.token);
  });
  dispatch({ type: LOGIN_USER, payload: {user: dataResponse.data.user, isLogin: true} });
};


export const signupUser = (userData) => async dispatch => {
  let dataResponse = {}
  console.log('hello from sign up', userData)
  await axiosData.post('/users/signup',{...userData}).then(res => {
    dataResponse = res.data;
    const cookies = new Cookies();
    cookies.set('jwt', res.data.token);
  });
  dispatch({ type: SIGNUP_USER, payload: {user: dataResponse.data.user, isLogin: true} });
};