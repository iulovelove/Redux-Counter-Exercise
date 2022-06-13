import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import changeValue from './reducers/Reducer'
import MyCounterApp from "./containers/CounterContainer";
 
const store = createStore(changeValue);//用reducer来创建store
 
ReactDOM.render(
    <Provider store={store}>
        <MyCounterApp/>
    </Provider>,
    document.getElementById('root')
);