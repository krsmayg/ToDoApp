import {FETCH_TASKS, CREATE_TASK, DELETE_TASK, UPDATE_TASK} from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case CREATE_TASK:
      let createState = [...state.tasks];
      createState.push(action.payload);
      return {
        tasks: createState
      }
    case DELETE_TASK:
      let deleteState = [...state.tasks];
      deleteState = deleteState.filter(item => item._id !== action.payload)
      return {
        tasks: deleteState
      }
    case UPDATE_TASK:
       let updatedState = [...state.tasks];
       let updatedTask = {}
       updatedState.filter(item => item._id == action.payload.id).map(task => {
          updatedTask = {...task}
        });
      updatedTask.name  = action.payload.updatedTask;
      updatedState = updatedState.map(task => task._id === updatedTask._id ? updatedTask : task);
       return {
        tasks: updatedState
       }
    default: return state;
  }
}