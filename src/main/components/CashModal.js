import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

import '../../assets/css/avatar.css'

const  modalStyle = {
    backgroundColor: 'rgba(126,192,238, 1)',
    maxWidth: 270,
    minHeight: 200,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
    marginTop: '-300px'
}

const footerStyle = {
    position: 'absolute',
    bottom: 20
};

export default class CashModal extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }  
    handleSubmit = (e) => {
        this.props.handleSubmit && this.props.handleSubmit(e);
    }        

    render(){
        if (!this.props.show){
            return null;
        }
        return (
            <div style={modalStyle}>
                {this.props.children}                    
                <div style={footerStyle}>
                    <button className="addButton" style={{width:"100px", height: "30px", borderRadius:"15px"}} 
                    onClick = { (e) => {this.onClose(e)}}>Close</button>
                    <button className="addButton" style={{width:"100px", height: "30px", borderRadius:"15px"}} 
                    onClick = { (e) => {this.handleSubmit(e)}}>Save</button>
                </div>
            </div>          
        )
    }
}