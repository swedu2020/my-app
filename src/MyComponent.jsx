import React, { Component } from 'react';

class MyComponent extends Component {
    componentDidUpdate(){
        console.log("MyComponent 새로고침");
    }
    render(){
        return(<div></div>);
    }
}
export default MyComponent;