import {createStore, combineReducers, applyMiddleware} from 'redux'
import addNameReducer from "./addNameReducer";
import CounterReducer from "./CounterReducer";
import reduxLogger from 'redux-logger'
// 原生redux 合并reducer 派发不影响，只影响取值
// store.getState()  变为  store.getState().CountingReducer
const rootReducer = combineReducers({
    NameReducer: addNameReducer,
    CountingReducer: CounterReducer
})

// createStore第二个参数代表默认状态， 一般在reducer处理
const store = createStore(rootReducer,
    applyMiddleware(reduxLogger))
export default store