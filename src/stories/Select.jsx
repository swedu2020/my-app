import React from 'react';
import PropTypes from 'prop-types';
export const Select = ({title, values, names, 
                        onChange, ...props}) => {
    const optionList = names.map((name, index)=>(
        <option key={index} value={values[index]}>{name}</option>
    ));
    return(
        <React.Fragment>
            <label>{title}</label>
            <select onChange={onChange}>
                {optionList}
            </select>
        </React.Fragment>
    );  
};
Select.propTypes = {
    title: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
    names: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
};
Select.defaultProps = {
    title: '무제 : ',
    values: null,
    names: null,
    onChange: ()=>{}
}