import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.frenchify = this.frenchify.bind(this); //for every new function need to bind
        this.state = {
            greeting: 'hello',
            buttonTitle: 'Frenchify'
        }
    }

    frenchify(){
        if (this.state.greeting === 'hello'){
            this.setState({greeting: "bonjour", buttonTitle: 'Englishify'})
        } else {
            this.setState({greeting: "hello", buttonTitle: "Frenchify"})
        }
        
    }

    render() {
        return (
            <div>
                <div>{this.state.greeting} {this.props.name}!</div>
                <button onClick={this.frenchify }>{this.state.buttonTitle}</button>
            </div>
        )
    }
}
export default HelloWorld;

/* OR WE CAN DO THIS:
const HelloWorld = (props) => {
    return (
        <div>Hello {props.name}!</div>
    )
}
export default HelloWorld;
*/