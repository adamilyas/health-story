import React, {Component} from 'react';
import { Container, Input, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../assets/css/avatar.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';
import Plus from '../assets/img/plus.svg';

// import api
import {
    API_SERVER_URL,
    GET_INFO,
    SUBMIT_CASH,
    TOPUP_CASH
} from '../api';

// import components
import Health from './components/Health';
import CashModal from './components/CashModal';

class Avatar extends Component {
    constructor(props){
        super(props);
        this.showCashModal = this.showCashModal.bind(this);
        this.submitCash = this.submitCash.bind(this);
        this.topup = this.topup.bind(this);

        this.state = {
            name: this.props.location.state.name,
            time: this.getDate(),
            cashShow: false,
            transaction: '',
            transactionValue: '',
            transactionType: ''
        }
        this.updateTransactionValue = this.updateTransactionValue.bind(this);        
    }

    async submitCash(){
        try {
            let submission = {
                name: this.state.name,
                cash: this.state.cash,
                transaction: this.state.transaction,
                value: parseInt(this.state.transactionValue)
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
                value: parseInt(this.state.transactionValue)
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
        let info = await this.callPostAPI(GET_INFO, {name: this.state.name});
        //console.log(info.cash);
        this.setState({cash: info.cash});
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
    
    showCashModal(){
        this.setState({cashShow: !this.state.cashShow});
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
                                <span align="right"><Health health={5}/></span>
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
                                <Button className="gridButton" align="left"  style={{backgroundColor: "#3ffc4a"}}>
                            
                                    <p>Exercise</p><p>Calories burnt: 1000</p>
                               
                                </Button>
                                <Button className="gridButton" right="left"  style={{backgroundColor: "#bffb46"}}>Food</Button>                            
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <Button className="gridButton" align="left" style={{backgroundColor: "#368df9"}}>Sleep</Button>
                                <Button className="gridButton" right="left" style={{backgroundColor: "#3ed8fb"}}>Water</Button>            
                            </div>                                               

                            <h3>Create Avatar</h3>
                            <h3>Create Avatar</h3>
                            <h3>Create Avatar</h3>
                            <h3>Create Avatar</h3>
                            <h3>Create Avatar</h3>
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
                        <Input align="left" fluid placeholder="$" type="text" value={this.state.transactionValue} onChange={this.updateTransactionValue}/>
                    </CashModal>                    
                </Container>





            </div>
        )
    }    
}

export default Avatar;
