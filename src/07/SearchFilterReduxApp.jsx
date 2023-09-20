import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';
import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchContainer from './containers/DispatchContainer03';
import SearchFilterInputContainer from './containers/SearchFilterInputContainer';
import SearchResetButtonContainer from './containers/SearchResetButtonContainer';
import SearchResultTableContainer from './containers/SearchResultTableContainer';

class SearchFilterReduxApp extends PureComponent {
  store = configureStore({ loading: false, user:{name:'Kim'} });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
    this.store.dispatch(setAge(2, 55));
    const { collection } = this.store.getState();
    console.log(collection);
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }
  render() {
    return (
      <Provider store={this.store}>
        SearchFilterReduxApp 리덕스 예제
        <fieldset>
            <SearchFilterInputContainer type="number" name="id" label="아이디검색"/>
            <SearchFilterInputContainer type="text" name="name" label="이름검색"/>
            <SearchFilterInputContainer type="number" name="age" label="나이검색"/>
            <SearchResetButtonContainer>리셋</SearchResetButtonContainer>
        </fieldset>
        <SearchResultTableContainer />
        <br/>
        <PresentationComponent userName="화면 컴포넌트" />
        <br />
        <ContainerComponent id={2} />
        <br/>
        <DispatchContainer />
      </Provider>
    );
  }
}
export default SearchFilterReduxApp;
