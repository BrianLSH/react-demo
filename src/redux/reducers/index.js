import { combineReducers } from 'redux';
import addNameReducer from "./addNameReducer";
import CounterReducer from "./CounterReducer";
import AsyncReduxThunkCount from "./AsyncReduxThunkCount";
import DivideActionReducer from "./DivideActionReducer";
const rootReducer = combineReducers({
    NameReducer:addNameReducer,
    CountingReducer:CounterReducer,
    AsyncThunkCount:AsyncReduxThunkCount,
    DivideActionReducer:DivideActionReducer
})
export default rootReducer

