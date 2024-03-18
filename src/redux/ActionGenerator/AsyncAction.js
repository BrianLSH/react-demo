import * as Types from '../action-types'
// import {getAsyncPlus} from "./AsyncActionCountGenerator";
import {ASYNC_COUNT_MINUS, ASYNC_COUNT_TIMES} from "../action-types";
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
   async getAsyncTime(){

    },
    async getAsyncMinus(){
        // 异步操作  redux-promise可以像正常一样使用promise await async

        // 同步操作直接return dispatch
        return{
            type:Types.ASYNC_COUNT_MINUS,
            payLoad: 100
        }
    }
}

export default AsyncAction