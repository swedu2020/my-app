import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildComponent extends Component {
    constructor(){   // 생성자
        super();  // 부모의 생성자 호출
        console.log('ChildComponent constructor');
        this.state = {
            loading : true,
            data : 'hello'    
        }
        console.log(this);
    }
    
    changeData(){
        console.log('changeData....');
        this.setState({
            loading : false,
            data : 'apple'
        });
        console.log(this);
    }
    render() {
        const {args01, args02, args03, args04, args05, args06} = this.props;
        console.log(args01);
        console.log(args02);
        console.log(args03); // 5개의 배열
        const [n1, n2, ...nn] = args03;
        console.log(n1);
        console.log(n2);
        console.log(nn);
        console.log(args04);
        console.log(args05);
        console.log(args06());
        return (
            <div>
                <button onClick={()=>{this.changeData()}}>체인지</button>
                {this.state.data}
            </div>
        );
    }
    //프로퍼티 타입 정의
    static propTypes = {
        args01:PropTypes.bool.isRequired,  // 필수입력
        args02:PropTypes.number,
        args03:PropTypes.arrayOf(PropTypes.number),
        args04:PropTypes.node,
        args05:PropTypes.object,
        args06:PropTypes.func
    }
    static defaultProps =  {
        args02:0
    }
}

export default ChildComponent;