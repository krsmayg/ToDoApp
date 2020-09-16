import React from 'react';
import ButtonNav from './ButtonNavigation';
import {Link, Router} from 'react-router-dom';
import Cookies from 'universal-cookie';

import {connect} from 'react-redux';
const toolbar = (props) => {
  const logOutHandler = () => {
    console.log('remove cookies')
    new Cookies().remove('jwt');
    window.setTimeout(() => {
      location.assign('/');
    },500)
  }
  console.log(props.userData)
  return ( 
    <nav className="w-full h-16 flex justify-between mt-4 px-10 items-center">
      <Link to="/">
       <h2 className="transition duration-500 ease-in-out text-white text-xl uppercase pixel-font transform hover:text-red-700">To Do App</h2>
      </Link>
      {new Cookies().get('jwt') && props.isLogin ? 
        <div className="flex items-center">
          <p className="text-white text-xl mr-4">{props.userData ? props.userData.name: null }</p>
          <ButtonNav logOut={logOutHandler}>Log out</ButtonNav>
        </div> : 
           <div className="">
           <Link to="/signup">
             <ButtonNav ownPropertyStyle="mr-4" >Sign up</ButtonNav>
           </Link>
           <Link to="/login">
             <ButtonNav>Login</ButtonNav>
           </Link> 
         </div>}
    </nav>
   );
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    isLogin: state.userData.isLogin,
    userData: state.userData.userData
  }
}
export default connect(mapStateToProps)(toolbar);