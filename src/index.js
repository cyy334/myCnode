import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//数据仓库
import {createStore,applyMiddleware} from "redux";
//中间件
import thunk from "redux-thunk";
import {Provider} from "react-redux"; 
import reducer from "./reducers/index";
const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>    
        <App />
        </Provider>
    </BrowserRouter>
    /*
        Provider功能主要为以下两点：
        在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
        接收Redux的store作为props，通过context对象传递给子孙组件上的connect
    */
, document.getElementById('root'));
