import * as Types from '../action-types'
import {getAsyncPlus} from "./AsyncActionCountGenerator";
import {ASYNC_COUNT_TIMES} from "../action-types";
// 引入异步api  处理异步请求

const AsyncAction = {
    getAsyncPlus () {
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch({
                    type:Types.ASYNC_COUNT_INCREMENT,
                    payLoad:{count:200}
                })
            },2000);
            // redux-thunk 需要手动派发
        }
    },
    getAsyncTime(){
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch({
                    type:Types.ASYNC_COUNT_TIMES,
                    payLoad:{time:200}
                })
            },2000)
        }
    }
}

export default AsyncAction