import React from 'react';
import ButtonNav from './ButtonNavigation';
import Cookies from 'universal-cookie';
import Link from 'next/link'
import {connect} from 'react-redux';
const toolbar = (props) => {
  const logOutHandler = () => {
    // console.log('remove cookies')
    // new Cookies().remove('jwt');
    // window.setTimeout(() => {
    //   location.assign('/');
    // },500)
  }
  console.log(props.userData)
  return ( 
    <nav className="w-full h-16 flex justify-between mt-4 px-10 items-center">
      <Link href="/">
       <h2 className="transition duration-500 ease-in-out text-white text-xl uppercase pixel-font transform hover:text-red-700">To Do App</h2>
      </Link>
      {new Cookies().get('jwt') && props.isLogin ? 
        <div className="flex items-center">
          <p className="text-white text-xl mr-4">{props.userData ? props.userData.name: null }</p>
          <ButtonNav logOut={logOutHandler}>Log out</ButtonNav>
        </div> : 
           <div className="">
           <Link href="/signup">
             <a><ButtonNav ownPropertyStyle="mr-4" >Sign up</ButtonNav></a>
           </Link>
           <Link href="/login">
             <a><ButtonNav>Login</ButtonNav></a>
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