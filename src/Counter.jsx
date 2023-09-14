import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { count: props.count };
        this.onAdd = this.props.onAdd.bind(this);
    }
    render() {
        return (<div> 현재 카운트 : {this.state.count}
            <button onClick={()=>this.onAdd()}>카운트 증가</button></div>
        );
    }
}
Counter.propTypes = {
    counter: PropTypes.number,
    onAdd: PropTypes.func
}
export default Counter;