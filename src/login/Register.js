import React, {Component} from 'react';
import { Container, Input, Button } from 'semantic-ui-react';

import '../assets/css/login.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';

class Register extends Component {
    constructor(props){
        super(props);
        this.selectMale = this.selectMale.bind(this); //for every new function need to bind
        this.selectFemale = this.selectFemale.bind(this);
        this.state = {image: Female};
    }

    selectMale(){
        this.setState({image: Male})
    }

    selectFemale(){
        this.setState({image: Female})
    }

    render(){
        return (
            <div className="App">
                <Container fluid>
                    <div className="loginContainer">
                        <div className="loginCard">
                        <img className="logo" src={this.state.image} alt=""/>
                        <h3>Create Avatar</h3>
                            <div className="loginInput">
                                <Input fluid icon="user" iconPosition="left" placeholder="Male"/>
                                <Input fluid icon="lock" iconPosition="right" placeholder="Female"/>
                            </div>
                            <Button onClick={this.selectMale}>Male</Button><Button onClick={this.selectFemale}>Female</Button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }    
}

export default Register;