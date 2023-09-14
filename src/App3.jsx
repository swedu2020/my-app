import React, { Component } from 'react';
import MyComponent from './MyComponent';
import MyPureComponent from './MyPureComponent';

class App3 extends Component {
    constructor(props){
        super(props);
        this.listValue = [{name: 'park'}, {name: 'Lee'}];
        this.state = {version : 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        setTimeout(()=>{
            this.listValue[0].name = 'Justin';
            this.setState({version:1});
            console.log('1번째');
            console.log(this.listValue);
        }, 100);
        setTimeout(()=>{
            this.listValue = [{name: 'Justin'}, {name: 'Lee'}];
            this.setState({version:2});
            console.log('2번째');
            console.log(this.listValue);
        }, 200);
    }
    render() {
        return (
            <div className='body'>
                <MyComponent value={this.listValue} />
                <MyPureComponent value={this.listValue} />
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

export default App3;