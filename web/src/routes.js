import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from  './pages/Register';
import Session from './pages/Session';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/session" compoent={Session} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default Routes;