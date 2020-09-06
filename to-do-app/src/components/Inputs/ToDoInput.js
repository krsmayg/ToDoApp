import React from 'react';
const ToDoInput = (props) => {
  return ( 
    <input onChange={props.setInput} className="transition duration-500 ease-in-out bg-gray-100 w-1/2 rounded-lg focus:bg-gray-200 hover:bg-gray-200 text-lg px-2 py-1 transform  focus:scale-110 outline-none" placeholder="Write your subject"></input>
   );
}
 
export default ToDoInput;