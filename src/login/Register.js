import React, {Component} from 'react';
import { Container, Input, Button} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../assets/css/login.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';

// import api
import {
    API_SERVER_URL,
    REGISTER
} from '../api';

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
            weight: '',
            gender: 'female',
            message: ''
        };
    }

    async handleSubmit(){
        let newHeight = this.state.height;
        let newWeight = this.state.weight;
        if (!isNaN(newHeight) && !isNaN(newWeight) && newHeight !== "" 
        && newWeight !== "" &&this.state.name !== "" && this.state.password !== ""){
            let submission = {
                "name": this.state.name,
                "password": this.state.password,
                "height": this.state.height,
                "weight": this.state.weight,
                "gender": this.state.gender

            }
            let result = await this.callPostAPI(REGISTER, submission);
            console.log(result);
            this.setState({message: result.text})
            if (result.text === "success"){
                this.props.history.push({
                    pathname: '/main',
                    state: {name: this.state.name}
                })                
            }

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
        this.setState({image: Male, gender: 'male'})
    }
    selectFemale(){
        this.setState({image: Female, gender: 'female'})
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
                        <div className="loginCard" style={{"background-color": "white", padding: "40px", width: "270px"}}>

                            <img className="registerLogo" src={this.state.image} alt=""/>

                            <h3>Create Avatar</h3>
                            <Button className="blueButton" onClick={this.selectMale}>Male</Button>
                            <Button className="blueButton" onClick={this.selectFemale}>Female</Button>

                            <div className="registerInput">
                                <p>Input name</p>
                                <Input placeholder="Name" value={this.state.name} onChange={this.updateName.bind(this)}/>
                                <p>Password</p>
                                <Input placeholder="Password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
                                <p>Height/ cm</p>
                                <Input placeholder="Height" value={this.state.height} onChange={this.updateHeight.bind(this)}/>
                                <p>Weight/ kg </p>
                                <Input placeholder="Weight" value={this.state.weight} onChange={this.updateWeight.bind(this)}/>
                                <p>{this.state.message}</p>

                            </div>
                            <Button className="blueButton" content="CREATE" onClick={this.handleSubmit} /><br />
                            <NavLink to="/"><Button className="blueButton">BACK</Button></NavLink>
                        </div>        
                    </div>
                </Container>

            </div>
        )
    }    
}

export default Register;