import React, {Component} from 'react';
import { Container, Input, Button } from 'semantic-ui-react';

import '../assets/css/login.css';
import logo from '../assets/img/heart.png';

const loginInstance = (
    <div className="App">
        <Container fluid>
            <div className="loginContainer">
                <div className="loginCard">
                <img className="logo" src={logo} alt=""/>
                <h3>Create Avatar</h3>
                    <div className="loginInput">
                        <Input fluid icon="user" iconPosition="left" placeholder="Username"/>
                        <Input fluid icon="lock" iconPosition="right" placeholder="Password" type="password"/>
                    </div>
                    <Button>Login</Button><Button>New User</Button>
                </div>
            </div>
        </Container>
    </div>
)

class Register extends Component {
    render(){
        return loginInstance;
    }    
}

export default Register;