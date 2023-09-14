import React from "react";
class Snack2 extends React.Component{
    render(){
        const snacks = ['초코파이', '새우깡', '몽쉘', '빼빼로', '쿠쿠다스', '엄마손파이'];
        const msg = this.props.message;
        console.log(msg);
        return(
            <div>{
                snacks.map((v, i)=>(
                    <h3 key={i}>{v}</h3>
                ))
            }</div>
        );
    }
}
export default Snack2;