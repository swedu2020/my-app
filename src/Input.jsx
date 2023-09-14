import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class Input extends PureComponent {
    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, onChange} = this.props;
        if(onChange(e.target.value.length)){
            console.log('아이디 길이 정상(5글자 이상)');
        }else{
            console.log('아이디 길이 비정상(5글자 미만)');
        }
    }
    componentDidMount(){
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }
    componentDidUpdate(){
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const {errorMessage, label, name, value, type, onFocus} = this.props;
        return (
            <label>
                {label}
                <input id={`input_${name}`} name={this.name} 
                        ref={this.setRef} onChange={this.handleChange}
                        onFocus={onFocus} value={value} type={type}
                />
                {errorMessage && <span className='error'>{errorMessage}</span>}
            </label>
        );
    }
}
Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'price', 'password', 'email']),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    autoFocus: PropTypes.bool
};
Input.defaultProps = {
    onChange: ()=>{},
    onFocus: ()=>{},
    autoFocus: false,
    type: 'text',
    name: 'username'
};
export default Input;