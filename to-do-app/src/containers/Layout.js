import React, { Component } from 'react';
import Toolbar from '../components/Navigation/Toolbar'
const Layout = (props) => {
  return (  
    <React.Fragment>
      <Toolbar />
      {props.children}
    </React.Fragment>
  );
}
 
export default Layout;