import React, { Component } from 'react';
class MyButton extends Component {
    render() {
        const {message} =  this.props;
        return (
            <button>
                {message}
            </button>
        );
    }
}
export default MyButton;