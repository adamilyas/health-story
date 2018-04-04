import React, {Component} from 'react';
import { Container, Input, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import '../assets/css/login.css';
import logo from '../assets/img/heart.png';

const loginInstance = (
    <div className="App">
        <Container fluid>
            <div className="loginContainer">
                <div className="loginCard">
                    <img className="logo" src={logo} alt=""/>
                    <h3>Health Story</h3>
                    <div className="loginInput">
                        <Input fluid placeholder="Username"/>
                        <Input fluid placeholder="Password" type="password"/>
                    </div>
                    <Button content="Login"/>
                    <Button><NavLink to="/register">New User</NavLink></Button>
                </div>                      
            </div>
        </Container>
    </div>
)

class Login extends Component {
    render(){
        return loginInstance;
    }    
}

export default Login;