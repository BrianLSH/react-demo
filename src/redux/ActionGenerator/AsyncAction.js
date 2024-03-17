import * as Types from '../action-types'
// import {getAsyncPlus} from "./AsyncActionCountGenerator";
import {ASYNC_COUNT_TIMES} from "../action-types";
// 引入异步api  处理异步请求

// redux-thunk 处理同步 直接返回一个函数就行
// 会直接dispatch出去
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