import Counter from "./Counter";
import NewCounter from "./NewCounter";
import React, { Component } from 'react';
import { shallowEqual } from "shallow-equal";

class App2 extends Component {
    constructor(props){
        super(props);
        this.state = { count : 10};
        this.resetCount = this.resetCount.bind(this);
        console.log('얕은비교 테스트');
        const obj = {name: 'park'};
        const mylist = [1,2,3,obj];
        const list1 = [1,2,3,obj];
        const list2 = [1,2,3, {name: 'park'}];
        console.log('mylist == list1 ', mylist == list1);
        console.log('mylist === list1 ', mylist === list1);
        console.log('shallowEqual(mylist, list1) ', shallowEqual(mylist, list1));
        console.log('shallowEqual(list1, list2) ', shallowEqual(list1, list2));
    }
    resetCount(){
        this.setState(({count})=>({
            count: count+10,
            message : 'Hello'
        }));
    }
    render() {
        return (
            <div>
                <div><Counter count={this.state.count}/></div>
                <div><NewCounter count={this.state.count}/></div>
                <button onClick={this.resetCount}>
                    {this.state.count + 10}으로 초기화
                </button>    
            </div>
        );
    }
}

export default App2;