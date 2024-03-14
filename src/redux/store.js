import {createStore} from 'redux'
import addNameReducer from "./addNameReducer";
import CounterReducer from "./CounterReducer";
// createStore第二个参数代表默认状态， 一般在reducer处理
const store = createStore(CounterReducer)
export default store