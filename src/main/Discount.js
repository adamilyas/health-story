import React, { Component } from 'react'
import { Container, Input, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../assets/css/avatar.css';
import '../assets/css/login.css';

//import image
import one from'../assets/img/discount/1.png'
import two from '../assets/img/discount/2.png'
import three from '../assets/img/discount/3.png'
import four from '../assets/img/discount/4.png'
import five from '../assets/img/discount/5.png'
import six from '../assets/img/discount/6.png'
import seven from '../assets/img/discount/7.png'
import eight from '../assets/img/discount/8.png'
import nine from '../assets/img/discount/9.jpg'

const row = {
    display: "flex",
    justifyContent: "space-between", 
    marginBottom: "30px"
}

const col = {
    display: "flex",
    flexDirection: "column"
}

const discountImage = {
    height: "50px",
    marginBottom: "15px"
}

const discountButton = {
    borderRadius: "25px",
    height: "30px",
    width: "90px",
    outline: "none"
}

const existingDiscountButton = {
    borderRadius: "25px",
    height: "30px",
    width: "200px",
    outline: "none",
    marginBottom: "20px"
}

class Discount extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.location.state.name
        }
    }

    goBack(){
        console.log(this.state);
        this.props.history.push({
            pathname: '/main', 
            state: { name: this.state.name }
        });
    }
    toDiscountList(){
        console.log(this.state);
        this.props.history.push({
            pathname: '/discountList', 
            state: { name: this.state.name }
        });
    }

    render(){
        return (
            <div className="App">
                <Container fluid>                
                    <div className="avatarContainer">
                        <div className="standard">
                            <div style={{display:"flex", justifyContent: "space-between"}}> 
                               
                                <button  className="navButton" onClick={this.goBack.bind(this)}>{"<<"}</button>
                                <NavLink to="/" ><button className="navButton">X</button></NavLink> 
                            </div>
                            <p style={{marginBottom:"50px"}}>Discount Page</p>
                                <button onClick={this.toDiscountList.bind(this)} style={existingDiscountButton}>Existing Discounts</button>

                                <div style={row}>
                                    <div style={col}>
                                        <img style={discountImage} src={one}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={two}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={three}/><button style={discountButton}>Redeem</button>
                                    </div>
                                </div>
                                <div style={row}>
                                    <div style={col}>
                                        <img style={discountImage} src={four}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={five}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={six}/><button style={discountButton}>Redeem</button>
                                    </div>
                                </div>
                                <div style={row}>
                                    <div style={col}>
                                        <img style={discountImage} src={seven}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={eight}/><button style={discountButton}>Redeem</button>
                                    </div>
                                    <div style={col}>
                                        <img style={discountImage} src={nine}/><button style={discountButton}>Redeem</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Container>
            </div>         
                
        )
    }
}

export default Discount;