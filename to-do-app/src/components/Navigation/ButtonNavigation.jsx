import React from 'react';

const ButtonNavigation = (props) => {
  return (  
    <button onClick={props.logOut} className={`transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 hover:scale-110 border-solid border border-gray-100 hover:bg-red-700 outline-none  ${props.ownPropertyStyle ? props.ownPropertyStyle : ''}`}>
      {props.children}
    </button>
  );
}
 
export default ButtonNavigation;