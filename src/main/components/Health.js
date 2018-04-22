import React, {Component} from 'react';

import logo from '../../assets/img/heart.png';


export default class Health extends Component {
    render(){
        return (
            <div>
                {[...Array(this.props.health)].map((item, index) => {
                    return <img key={index} src={logo} alt=""  style={{height: "20px"}}/>
                })}
            </div>
        )
    }
}