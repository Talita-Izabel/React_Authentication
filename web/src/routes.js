import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from  './pages/Register';
import Session from './pages/Session';

/*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);*/

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/session" component={Session} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default Routes;