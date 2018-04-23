import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import Login from './login/Login';
import Register from './login/Register';
import Avatar from './main/Avatar';
import Discount from './main/Discount';
import DiscountList from './main/DiscountList';


// import styling and assets
import './assets/css/App.css';

class App extends Component {
  render() {
    // Place all routes in this component
    return (
      <div>
        <Switch> 
          <Route exact path='/' component={Login}/> 
          <Route path='/register' component={Register}/>
          <Route path='/main' component={Avatar}/>
          <Route path='/discount' component={Discount}/>
          <Route path='/discountList' component={DiscountList}/>
        </Switch>
      </div>
    );
  }
}
export default App;
