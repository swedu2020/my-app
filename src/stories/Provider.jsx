import React from 'react';
import PropTypes from 'prop-types';
import LoadingProvider from '../06/LoadingProviderWithNewContext';
import ButtonWithNewConsumer from '../06/ButtonWithNewConsumer';
export const Provider = ({name}) => {
    return(
        <LoadingProvider>
            <div>
                <ButtonWithNewConsumer children={name}/>
            </div>
        </LoadingProvider>
    );  
};
Provider.propTypes = {
    name: PropTypes.string,
};
Provider.defaultProps = {
    name: '무제',
}