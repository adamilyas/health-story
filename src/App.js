import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import Login from './login/Login';
import HelloWorld from './login/HelloWorld';
import Register from './login/Register';

// import styling and assets
import './assets/css/App.css';

class App extends Component {
  render() {
    // Place all routes in this component
    return (
      <div>
        <Switch> 
          <Route exact path='/' component={Login}/> 
          <Route path='/hello' component={HelloWorld}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </div>
    );
  }
}
export default App;
