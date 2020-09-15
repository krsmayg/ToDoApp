import React from 'react';
import ButtonNav from './ButtonNavigation';
import {Link, Router} from 'react-router-dom'

const toolbar = () => {
  return ( 
    <nav className="w-full h-16 flex justify-between mt-4 px-10 items-center">
      <Link to="/">
       <h2 className="transition duration-500 ease-in-out text-white text-xl uppercase pixel-font transform hover:text-red-700">To Do App</h2>
      </Link>
      <div className="">
          <Link to="/signup">
            <ButtonNav ownPropertyStyle="mr-4" >Sign up</ButtonNav>
          </Link>
          <Link to="/login">
            <ButtonNav>Login</ButtonNav>
          </Link> 
      </div>
    </nav>
   );
}
 
export default toolbar;