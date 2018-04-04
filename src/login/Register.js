import React, {Component} from 'react';
import { Container, Input, Button, Label } from 'semantic-ui-react';

import '../assets/css/register.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';

class Register extends Component {
    constructor(props){
        super(props);
        this.selectMale = this.selectMale.bind(this); //for every new function need to bind
        this.selectFemale = this.selectFemale.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: Female,
            name: '',
            password: '',
            height: '',
            weight: ''
        };
    }

    handleSubmit(){
        let newHeight = this.state.height;
        let newWeight = this.state.weight;
        if (!isNaN(newHeight) && !isNaN(newWeight) && newHeight !== "" 
        && newWeight !== "" &&this.state.name !== "" && this.state.password !== ""){
            let submission = {
                "name": this.state.name,
                "password": this.state.password,
                "height": this.state.height,
                "weight": this.state.weight
            }
            console.log(submission);
        } else {
            alert("You want play the game not? then fill in properly leh");
        }
    }

    updateName(event){
        this.setState({name: event.target.value});
    }
    updatePassword(event){
        this.setState({password: event.target.value});
    }
    updateHeight(event){
        this.setState({height: event.target.value});
    }
    updateWeight(event){
        this.setState({weight: event.target.value});
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
                            <img className="registerLogo" src={this.state.image} alt=""/>
                            <h3>Create Avatar</h3>
                            <Button onClick={this.selectMale}>Male</Button><Button onClick={this.selectFemale}>Female</Button>
                            <div className="loginInput">
                                <p>Input name</p>
                                <Input fluid placeholder="Name" value={this.state.name} onChange={this.updateName.bind(this)}/>
                                <p>Password</p>
                                <Input fluid placeholder="Password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
                                <p>Height/ cm</p>
                                <Input fluid placeholder="Height" value={this.state.height} onChange={this.updateHeight.bind(this)}/>
                                <p>Weight/ kg </p>
                                <Input fluid placeholder="Weight" value={this.state.weight} onChange={this.updateWeight.bind(this)}/>
                            </div>
                            <Button content="CREATE" onClick={this.handleSubmit} />
                        </div>        
                    </div>
                </Container>
            </div>
        )
    }    
}

export default Register;