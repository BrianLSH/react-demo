import React, {useEffect, useState} from "react";
import store from "../../redux/store";
import {ShowRedux} from "./ShowRedux";
import {AsyncCounter} from "./AsyncCounter";
export const Counter = ()=>{


    const [initCount, setCount] = useState(0)
    useEffect(() => {
        // 原生redux要使用 store.subscribe 订阅仓库的state
        const unsubscribe = store.subscribe(()=>{
            const newCount = store.getState().CountingReducer;
            // console.log('3333', store.getState().CountingReducer)
            // setCount(newCount)
            // 要用箭头函数
            setCount((prevState)=>{
                return newCount
            })
        }) ;

        return () => {
            console.log("cancel123");
            unsubscribe();
        };
    }, []);

    const handlePlus = ()=>{
        store.dispatch({type:'add'})
    }
    const handleMinus = ()=>{
        store.dispatch({type:'minus'})
    }
    return(
        <>
            <div>
              <p>原生redux  redux-thunk异步+测试</p>
              <p>原生redux  redux-promise异步-测试</p>
                    <AsyncCounter/>
            </div>
            <br/><br/><br/>
            <div>
                <p>
                    原生redux 同步操作
                </p>
                <button onClick={handlePlus}>+</button>
                当前值:<span>{initCount.count}</span>
                <button onClick={handleMinus}>-</button>
            </div>

            <br/><br/><br/>
            <div>
                <ShowRedux/>
            </div>

        </>
    )
}