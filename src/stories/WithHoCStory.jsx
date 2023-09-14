import React from 'react';
import PropTypes from 'prop-types';
import MyButton from '../05/MyButton';
import MyInput from '../05/MyInput';
import withHoc from '../05/withHoC';
const InputWithHoC = withHoc(MyInput);
const ButtonWithHoC = withHoc(MyButton);
export const WithHOcStory = ({type, message}) => {
    return(
        <div>
            <InputWithHoC type={type} message={message}/>
            <ButtonWithHoC message={message} />
        </div>
    );
};
WithHOcStory.propTypes ={
    message: PropTypes.string,
    type: PropTypes.string
};
WithHOcStory.defaultProps = {
    message:'message',
    type: 'text'
};