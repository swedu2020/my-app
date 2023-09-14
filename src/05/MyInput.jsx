import React, { Component } from 'react';
class MyInput extends Component {
    render() {
        const {type, message} =  this.props;
        return (
            <input type={type} value={message}/>
        );
    }
}
export default MyInput;