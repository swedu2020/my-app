import React from 'react';
import PropTypes from 'prop-types';
import HomePageComponent from '../06/HomePageComponent';
import HomePageWithProvider from '../06/HomePageWithProvider';
import HomePageWithTwoProvider from '../06/HomePageWithTwoProvider';
export const HomePage = ({name}) => {
    return(
        <React.Fragment>
            <HomePageComponent />
            {/* <HomePageWithProvider /> */}
            {/* <HomePageWithTwoProvider /> */}
        </React.Fragment>
    );  
};
HomePage.propTypes = {
    name: PropTypes.string
};
HomePage.defaultProps = {
    name: '무제 : '
}