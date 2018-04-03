import React, {Component} from 'react';
import { Container, Input, Button, Responsive, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import '../assets/css/login.css';
import logo from '../assets/img/heart.png';

const loginInstance = (
    <div className="App">
        <Container fluid>
            <div className="loginContainer">
                <Segment.Group>
                    <Responsive as={Segment}>
                        <div className="loginCard">
                            <img className="logo" src={logo} alt=""/>
                            <h1>Health Story</h1>
                            <div className="loginInput">
                                <Input fluid icon="user" iconPosition="left" placeholder="Username"/>
                                <Input fluid icon="lock" iconPosition="right" placeholder="Password" type="password"/>
                            </div>
                            <Button content="Login"/>
                            <Button><NavLink to="/register">New User</NavLink></Button>
                        </div>                      
                    </Responsive>
                </Segment.Group>
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