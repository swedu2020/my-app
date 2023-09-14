import React from "react";
export default function withHoc(WrappedComponent){
    return class WithHoC extends React.Component{
        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
}
