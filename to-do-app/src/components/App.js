import React from 'react';
import ListController from '../containers/ListController';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Layout from '../containers/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Switch>
              <Route  path="/login" component={Login} />
              <Route  path="/signup" component={SignUp} />
              <Route  path="/" component={ListController} />
            </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
