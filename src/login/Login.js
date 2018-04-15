import React, {Component} from 'react';
import { Container, Input, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../assets/css/login.css';
import logo from '../assets/img/heart.png';

// import api
import {
    API_SERVER_URL,
    LOGIN
} from '../api';

// import components
import Modal from './components/modals'; 

class Login extends Component {
    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            name: '',
            password: '',
            show: false
        }        
    }

    showModal(){
        this.setState({
            show: !this.state.show
        })

    }

    async handleLogin(){
        let name = this.state.name;
        let password = this.state.password;
        let submission = {
            name: this.state.name,
            password: this.state.password
        }
        let result = await this.callPostAPI(LOGIN, submission);
        // console.log(result);
        if (result.message  === "success"){
            console.log(result);
            this.props.history.push({
                pathname: '/main', 
                state: { name: this.state.name }
            });
        } else {
            console.log(result);
            this.setState({show: true});
        }
    }

    updateName(event){
        this.setState({name: event.target.value});
    }
    updatePassword(event){
        this.setState({password: event.target.value});
    }

    async callPostAPI(api, body){
        let result = {};
        
        await fetch(API_SERVER_URL + api,{
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            result = responseJson;
        })

        return result;
    }     

    render(){
        return (
            <div className="App">
                <Container fluid>
                    <div className="loginContainer">
                        <div className="loginCard" style={{backgroundColor: "white", padding: "40px", width: "270px"}}>

                            <img className="loginLogo" src={logo} alt=""/>
                            <h3>Health Story</h3>

                            <div className="loginInput">
                                <Input fluid placeholder="Username" value={this.state.name} onChange={this.updateName.bind(this)} /><br />
                                <Input fluid placeholder="Password" type="password" value={this.state.password} 
                                onChange={this.updatePassword.bind(this)} />
                                
                            </div>
                            <div style={{}}>
                                <Button className="blueButton" content="Login" onClick={this.handleLogin} style={{marginTop: '30px'}}/>
                                <NavLink to="/register"><Button className="blueButton">New User</Button></NavLink>
                            </div>
                        </div>                      
                    </div>
                </Container>
                <Modal show={this.state.show} onClose={this.showModal}>
                    <p>INCORRECT USERNAME/ PASSWORD. PLEASE TRY AGAIN</p>
                </Modal>
            </div>
        )
    }    
}

export default Login;