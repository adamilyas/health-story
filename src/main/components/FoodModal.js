import React, { Component } from 'react'

import '../../assets/css/avatar.css'

const  modalStyle = {
    backgroundColor: 'rgba(191, 251, 70, 0.9)',
    maxWidth: 270,
    minHeight: 220,
    margin: 'auto',
    padding: 30,
    position: 'relative',
    marginTop: '-500px'
}

const foot2Style = {
    position: 'absolute',
    bottom: 25
};

const footerStyle = {
    position: 'absolute',
    top: 10,
    right: 5
};

const topupStyle = {
    width:"120px", 
    height: "25px", 
    borderRadius:"15px",
    fontSize: "10px",
    backgroundColor: "lawngreen"
}

const buttonStyle = {
    width:"25px", 
    height: "25px", 
    borderRadius:"15px",
    fontSize: "10px",
    backgroundColor: "aqua"
}

export default class FoodModal extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }  
    
    handleAdd = (e) => {
        this.props.handleAdd && this.props.handleAdd(e);
    }     

    render(){
        if (!this.props.show){
            return null;
        }
        return (
            <div style={modalStyle}>
                {this.props.children}       
                <div style={foot2Style}>
                    <button className="addButton" style={topupStyle} onClick = { (e) => {this.handleAdd(e)}}>Save</button>&nbsp;&nbsp;                 
                </div>                           
                <div style={footerStyle}>
                    <button className="addButton" style={buttonStyle} onClick = { (e) => {this.onClose(e)}}>X</button>&nbsp;&nbsp;                  
                </div>
            </div>          
        )
    }
} 