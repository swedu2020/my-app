import React, { Component } from 'react';

class NewCounter extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.increaseCount = this.increaseCount.bind(this);
    }
    static getDerivedStateFromProps(props, state){
        console.log('NewCount getDerivedStateFromProps 실행..');
        console.log(props);
        console.log(state);
        const {count} = props;
        return {
            count,
            newCount:count === state.count ? state.newCount : count
        };
    }
    componentDidMount(){ // render()함수로 화면이 그려진 후 동작
        console.log('NewCount componentDidMount 호출');
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('NewCount componentDidUpdate 호출');
        console.dir(prevProps);
        console.dir(prevState);
        console.dir(snapshot);
    }
    componentWillUnmount(){
        console.log('NewCount componentWillUnmount 호출');
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('NewCount getSnapshotBeforeUpdate 호출');
        console.log(prevProps, prevState);
        return {};
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('NewCount shouldComponentUpdate 호출');
        console.log(this.props, nextProps);
        console.log(this.state, nextState);
        return true;
    }
    increaseCount(){
        this.setState(({newCount})=>({
            newCount:newCount+1
        }));
    }
    render() {
        return (
            <div>
                현재 카운트 : {this.state.newCount}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default NewCounter;