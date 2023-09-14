import React, { Component } from 'react';

class LifecycleExample extends Component {
    changeData(){
        console.log('changeData....');
        this.setState({
            num : Math.floor(Math.random()*3)
        });
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps 호출');
        console.log('props : ', props);
        console.log('state : ', state);
        return state;  // 리턴값으로 state를 변경 
    }
    constructor(props){
        super(props);
        this.state = {
            num : 0
        };
        console.log('constructor 호출');
    }
    componentDidMount(){ // render()함수로 화면이 그려진 후 동작
        console.log('componentDidMount 호출');
        this.forceUpdate();
        // this.setState({
        //     updated: true
        // });
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate 호출');
        console.dir(prevProps);
        console.dir(prevState);
        console.dir(snapshot);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount 호출');
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate 호출');
        console.log(prevProps, prevState);
        return {};
    }
    // 업데이트시 화면을 새로 출력할지를 판단
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate 호출');
        console.log(this.props, nextProps);
        console.log(this.state, nextState);
        return false;
        // if(this.state.num == nextState.num){
        //     return false;
        // }
        // return true;
    }

    render() {
        console.log('render 호출');
        return (
            <div>
                <button onClick={()=>{this.changeData()}}>체인지</button>
                {this.state.num}
            </div>
        );
    }
}

export default LifecycleExample;