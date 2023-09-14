import React from "react";
export default function withHoc(WrappedComponent){
    const {displayName, name} = WrappedComponent;
    const WrappedComponentName = displayName || name;
    return class WithHoC extends React.Component{
        static displayName = `withHoc(${WrappedComponent.name})`;
        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
}
