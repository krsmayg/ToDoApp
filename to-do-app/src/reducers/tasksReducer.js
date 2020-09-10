import {FETCH_TASKS, CREATE_TASK} from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log("PAYLOAD FROM REDUCER FETCH_TASK:", action.payload);
      console.log("STATE FROM REDUCER FETCH:", state.tasks); 
      console.log( typeof action.payload)
      return {
        ...state,
        tasks: action.payload
      }
    case CREATE_TASK:
      console.log("PAYLOAD FROM REDUCER CREATE_TASK:", action.payload);
      console.log("STATE FROM REDUCER:", state.tasks);
      const prevState = [...state.tasks];
      console.log( typeof prevState);
      prevState.push(action.payload);
      return {
        tasks: prevState
      }
    default: return state;
  }
}