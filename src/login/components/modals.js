import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

import '../../assets/css/avatar.css'

const  modalStyle = {
    backgroundColor: 'rgba(126,192,238, 0.7)',
    maxWidth: 270,
    minHeight: 120,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
    marginTop: '-400px'
}

const footerStyle = {
    position: 'absolute',
    bottom: 20
};

export default class Modal extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
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
                    onClick = { (e) => {this.onClose(e)}}>
                        Close
                    </button>
                </div>
            </div>          
        )
    }
}