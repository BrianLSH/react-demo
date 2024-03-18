import * as Types from '../action-types';
import {ASYNC_COUNT_DIVIDE} from "../action-types";

// 模块化action  兼容redux-thunk 和 react-redux语法
const DivideAction = {
   async getDivideResult(){
       return {
           type:Types.ASYNC_COUNT_DIVIDE,
       }
    }
}

export default DivideAction;