import React from 'react';
import ButtonNav from './ButtonNavigation';
import {Link, Router} from 'react-router-dom'

const toolbar = () => {
  return ( 
    <nav className="w-full h-16 flex justify-between mt-4 px-10 items-center">
      <h2 className="text-white text-xl uppercase pixel-font">To Do App</h2>
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