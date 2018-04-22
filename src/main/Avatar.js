import React, {Component} from 'react';
import { Container, Input, Button, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../assets/css/avatar.css';
import '../assets/css/login.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';
import Plus from '../assets/img/plus.svg';

// import api
import {
    API_SERVER_URL,
    GET_INFO,
    SUBMIT_CASH,
    TOPUP_CASH,
    SUBMIT_EXERCISE
} from '../api';

// import components
import Health from './components/Health';
import CashModal from './components/CashModal';
import ExerciseModal from './components/ExerciseModal';

class Avatar extends Component {
    constructor(props){
        super(props);
        this.showCashModal = this.showCashModal.bind(this);
        this.submitCash = this.submitCash.bind(this);
        this.topup = this.topup.bind(this);

        this.showExerciseModal = this.showExerciseModal.bind(this);
        this.submitExercise = this.submitExercise.bind(this);    

        this.state = {
            name: this.props.location.state.name,
            time: this.getDate(),
            cashShow: false,
            transaction: '',
            transactionValue: '',
            transactionType: '',
            exerciseShow: false,
            exerciseType: '',
            exerciseInterval: ''
        }
        //this.updateTransactionValue = this.updateTransactionValue.bind(this);        
    }
                                                                        // submit transaction
    async submitCash(){
        try {
            let submission = {
                name: this.state.name,
                cash: this.state.cash,
                transaction: this.state.transaction,
                value: this.state.transactionValue
            }
            let result = await this.callPostAPI(SUBMIT_CASH, submission);
            if (result){
                console.log(result);
                this.setState({cash: result.cash, cashShow: false});
            } else {
                this.setState({transaction: "error try again"});
            }            
        } catch (err) {
            console.log(err);
        }

    }

    async topup(){
        try {
            let submission = {
                name: this.state.name,
                cash: this.state.cash,
                transaction: this.state.transaction,
                value: this.state.transactionValue
            }
            let result = await this.callPostAPI(TOPUP_CASH, submission);
            if (result){
                console.log(result);
                this.setState({cash: result.cash, cashShow: false});
            } else {
                this.setState({transaction: "error try again"});
            }            
        } catch (err) {
            console.log(err);
        }

    }    
                                                                                // transaction

    showCashModal(){
        this.setState({cashShow: !this.state.cashShow});
    }                                                                                
    updateTransaction(event){
        this.setState({transaction: event.target.value});
        console.log(this.state);
    }
    updateTransactionValue(event){
        const re = /[+-]?([0-9]*[.])?[0-9]+/;
        if (event.target.value == '' || re.test(event.target.value)) {
            this.setState({transactionValue: event.target.value})
         }
    } 
                                                                                // exercise
    showExerciseModal(){
        this.setState({exerciseShow: !this.state.exerciseShow});
    }                                                                                  
    updateExerciseType(event){
        this.setState({exerciseType: event.target.value});
        console.log(this.state);
    }
    updateExerciseInterval(event){
        const re = /[+-]?([0-9]*[.]{0,1})?[0-9]+/;
        if (event.target.value == '' || re.test(event.target.value)) {
            this.setState({exerciseInterval: event.target.value})
         }
    }
    async submitExercise(){
        try {
            let submission = {
                name: this.state.name,
                exercise: this.state.exercise,
                type: this.state.exerciseType,
                interval: this.state.exerciseInterval
            }           
            console.log(submission); 
            let result = await this.callPostAPI(SUBMIT_EXERCISE, submission);
            console.log(result);
            if (result){
                console.log(result);
                this.setState({health: this.state.health+1,exercise: result.exercise, exerciseShow: false});
            }
        } catch (err) {
            console.log(err);
        }
    }     


                                                                            // time
    getDate(){
        var d = new Date();
        var h = `0${d.getHours()}`.slice(-2);
        var m = `0${d.getMinutes()}`.slice(-2);
        var s = `0${d.getSeconds()}`.slice(-2);
        return `${h}:${m}:${s}`;

    }    
    async componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
                                                                    // didMount get info here
        let result = await this.callPostAPI(GET_INFO, {name: this.state.name});

        this.setState({
            cash: result.cash,
            sleep: result.info.sleep,
            food: result.info.food,
            exercise: result.info.exercise,
            health: result.info.health
        });
        console.log('This state is:');
        console.log(this.state);
      }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: this.getDate()
        });
    }
                                                                    // ggeneric post function
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
                    <div className="avatarContainer">   
                        <div style={{backgroundColor: "white", width: "310px", padding: "20px"}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-12px"}}>
                                <p align="left">{this.state.name}</p>
                                <p align="right">{this.state.time}</p>
                            </div>   
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-15px"}}>
                                <span align="left"> </span>
                                <span align="right"><Health health={this.state.health}/></span>
                            </div>                                
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-12px"}}>
                                <span align="left"> </span>
                                <p align="right">${this.state.cash}</p>
                            </div>                                      
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <span align="left"> </span>
                                <Button onClick={this.showCashModal} className="addButton" align="right" style={{backgroundColor: "lawngreen"}}>ADD</Button>
                            </div>                                                              
                            



                            <img className="avatarLogo" src={Female} alt="" style={{height: "100px", marginTop: "0px", marginBottom: "20px"}}/>

                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                <Button className="gridButton" align="left" onClick={this.showExerciseModal} style={{backgroundColor: "rgba(63, 252, 74, 1)"}}>
                            
                                    <p>Exercise</p><p>Total Minutes: {this.state.exercise}</p>
                               
                                </Button>
                                <Button className="gridButton" right="left"  style={{backgroundColor: "#bffb46"}}>
                                
                                    <p>Food</p><p>Calories in: {this.state.food}</p>        
                                
                                </Button>                            
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <Button className="gridButton" align="left" style={{backgroundColor: "#368df9"}}>
                                    <p>Sleep</p><p>Hours left: zZZZ</p>
                                </Button>
                                
                                <Button className="gridButton" right="left" style={{backgroundColor: "#3ed8fb"}}>
                                    <p>Water</p><p>Drink More please!</p>
                                </Button>            
                            </div>                                               

                            <p>Drink 8 water of glass daily</p>
                            <p>Eat your bhejitables</p>
                            <h3>Dont go OPSPITAL</h3>
                            <h3>Create Avatar</h3>
                            <div className="registerInput">
                            </div>
                            <NavLink to="/" style={{textDecoration:"none", color:"black"}}><Button className="blueButton">LOGOUT</Button></NavLink>                            
                        </div>        
                    </div>

                    <CashModal show={this.state.cashShow} onClose={this.showCashModal} handleSpend={this.submitCash} handleAdd={this.topup}>
                        <p>My Wallet</p>
                        <p style={{fontSize: "10px"}} align="left">Spending</p>
                        <Input align="left" fluid placeholder="E.g. Top up bus fare" type="text" value={this.state.transaction} onChange={this.updateTransaction.bind(this)}/>
                        <p style={{fontSize: "10px"}} align="left">Value $</p>
                        <Input align="left" fluid placeholder="$" type="text" value={this.state.transactionValue} onChange={this.updateTransactionValue.bind(this)}/>
                    </CashModal>                 

                    <ExerciseModal show={this.state.exerciseShow} onClose={this.showExerciseModal} handleAdd={this.submitExercise}>
                        <p>Lets Get Physical</p>
                        <p style={{fontSize: "10px"}} align="left">Activity</p>
                        <Input align="left" fluid placeholder=" e.g. running" type="text" value={this.state.exerciseType} onChange={this.updateExerciseType.bind(this)}/>
                        <p style={{fontSize: "10px"}} align="left">Time taken:</p>
                        <Input align="left" fluid placeholder="In minutes" type="text" value={this.state.exerciseInterval} onChange={this.updateExerciseInterval.bind(this)}/>
                    </ExerciseModal>    

                </Container>

            </div>
        )
    }    
}

export default Avatar;


const activityOptions = [
    {key: 'cy', value: 'cy' , text: 'Cycling'},
    {key: 'wa', value: 'wa' ,text: 'Walking'},
    {key: 'ru', value: 'ru' ,text: 'Running'}
]
