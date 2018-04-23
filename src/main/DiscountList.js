import React, { Component } from 'react'
import {Container} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const row = {
    display: "flex",
    justifyContent: "space-between", 
    marginBottom: "30px"
}

const col = {
    display: "flex",
    flexDirection: "column"
}
class DiscountList extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.location.state.name
        }
    }

    goBack(){
        this.props.history.push({
            pathname: '/discount', 
            state: { name: this.state.name }
        });
    }
    render(){
        
        return (
            <div className="App">
                <Container fluid>                
                    <div className="avatarContainer">
                        <div className="standard">
                            <div style={{display:"flex", flexDirection:"row"}}> 
                                <button className="navButton" onClick={this.goBack.bind(this)}>{"<<"}</button>
                            </div>
                            <p style={{marginBottom: "30px"}}>My Discounts</p>
                            <div style={row}>
                                <b>No.</b>
                                <b>Tye of voucher</b>
                                <b>Expiry Date</b>
                            </div>
                            <div style={row}>
                                <div>1.</div>
                                <div>Active SG Free Entry</div>
                                <div>23-04-18</div>
                            </div>
                            <div style={row}>
                                <div>2.</div>
                                <div>Swim. Complex Free Entry</div>
                                <div>23-05-18</div>
                            </div>
                            <div style={row}>
                                <div>3.</div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default DiscountList;
