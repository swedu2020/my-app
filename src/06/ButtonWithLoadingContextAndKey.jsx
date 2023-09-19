import React from "react";
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContextAndKey, {laodingPropTypes} from './withLoadingContextAndKey';
function ButtonWithLoadingContext({childern, loading, setLoading}){
    return(
        <Button onPress={()=>setLoading(!loading)}>
            {loading ? '로딩중':childern}
        </Button>
    );
}
ButtonWithLoadingContext.propTypes = {
    ...laodingPropTypes,
    childern: PropTypes.string
};
export const ButtonWithDefaultLoadingContext = 
    withLoadingContextAndKey()(ButtonWithLoadingContext);
export const ButtonWithLoading2Context = 
withLoadingContextAndKey('loading2')(ButtonWithLoadingContext);

