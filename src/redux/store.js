import {createStore, combineReducers, applyMiddleware} from 'redux'

import reduxLogger from 'redux-logger'
// import thunk from 'redux-thunk'
import {thunk} from 'redux-thunk'
// import thunk from 'redux-thunk';

// import {middleware} from "./Middleware/Middleware";


// 剥离出去
// import addNameReducer from "./reducers/addNameReducer";
// import CounterReducer from "./reducers/CounterReducer";
// 原生redux 合并reducer 派发不影响，只影响取值
// store.getState()  变为  store.getState().CountingReducer
// const rootReducer = combineReducers({
//     NameReducer: addNameReducer,
//     CountingReducer: CounterReducer
// })

import rootReducer from "./reducers";

// createStore第二个参数代表默认状态， 一般在reducer处理
const store = createStore(rootReducer,
    applyMiddleware(reduxLogger,thunk))
export default store