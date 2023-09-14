import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    render() {
        return (
            <div>
                <ChildComponent 
                    args01={true}
                    // args02={10}
                    args03={[1,2,3,4,5]}
                    args04={<h1>node</h1>}
                    args05={{'name':'홍길동', 'age':20}}
                    args06={()=>{console.log('hello~~')}}
                />
            </div>
        );
    }
}

export default ParentComponent;