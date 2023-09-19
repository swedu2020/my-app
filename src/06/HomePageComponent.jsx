import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
function RowBComponent(){
    return <ButtonWithLoadingContext label='hello2'>버튼</ButtonWithLoadingContext>;
}
function RowCComponent(){
    return <ButtonWithContext>버튼</ButtonWithContext>;
}
function TableComponent(){
    return(
        <table>
            <RowBComponent />
            <RowCComponent />
        </table>
    );
}
class HomePageComponent extends PureComponent{
    constructor(props){
        super(props);
        this.state = {loading: false};
        this.setLoading = this.setLoading.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
    }
    getChildContext(){
        return{
            loading: this.state.loading,
            setLoading: this.setLoading
        }
    }
    setLoading(loading){
        this.setState({loading});
    }
    toggleLoading(){
        this.setState(({loading}) => ({loading: !loading}));
    }
    render(){
        return(
            <div>
                <TableComponent />
                <Button onPress={this.toggleLoading}>상태변경</Button>
            </div>
        );
    }
}
HomePageComponent.childContextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func
};
export default HomePageComponent;