import React, {PureComponent} from "react";
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
import {setLoading, resetLoading} from './actions/loadingActions';
import { setUser} from "./actions/userActions";
export default class ReduxApp extends PureComponent{
    store = configureStore({loading: false});
    componentDidMount(){
        this.store.dispatch(setLoading(true));
        this.store.dispatch(resetLoading());
        this.store.dispatch(setUser({name: 'park', age:20}));
    }
    render(){
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}