import React, { Component } from 'react';
class Counter3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.setRef = this.setRef.bind(this);
        this.increateCount = this.increateCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    increateCount(){
        this.setState(({count})=>({count:count+1}));
    }
    resetCount(){
        this.setState({count:0});
    }
    setRef(ref){
        console.log('Counter3 setRef.....');
        this.ref = ref;
    }
    componentDidMount(){
        // const addCount = document.getElementById('addCount');
        const addCount = this.ref;
        console.log('componentDidMount...');
        console.dir(addCount);
        // addCount.addEventListener('click', this.increateCount);
        addCount.onclick = this.increateCount;
        addCount.onmouseout = this.resetCount;
    }   
    componentWillUnmount(){
        const addCount = this.ref;
        addCount.removeEventListener('click', this.increateCount);
        addCount.removeEventListener('mouseout', this.resetCount);
    }
    render() {
        return (
            <div>
                현재 카운트 : {this.state.count}
                <button ref={this.setRef}
                //  id='addCount'
                // onClick={this.increateCount}
                // onMouseOut={this.resetCount}
                >카운트 증가</button>
            </div>
        );
    }
}

export default Counter3;