import React, { Component } from 'react';

export default class ScrollSpy extends Component {
    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }
    setRef(ref){
        this.ref = ref;
        console.log('setRef 실행....');
        console.log(this);
    }
    checkPosition(){
        console.dir(this.ref.getBoundingClientRect());
        console.log(window.innerHeight);
        if(this.ref.getBoundingClientRect().top < window.innerHeight){
            console.log('enter');
        }else{
            console.log('exit');
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.checkPosition);
        // this.checkPosition();
    }   
    componentWillUnmount(){
        window.removeEventListener('scroll', this.checkPosition);
    }
    render() {
        return (
            <div ref={this.setRef}>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
            </div>
        );
    }
}

// export default ScrollSpy;