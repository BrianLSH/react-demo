import react, {useEffect, useState} from "react";
import store from "../../redux/store";
import {getAsyncPlus} from "../../redux/ActionGenerator/AsyncActionCountGenerator";
import AsyncAction from "../../redux/ActionGenerator/AsyncAction";
export const AsyncCounter = () => {
    const [asyncCount, setCount] = useState({count:0})

    // 无法更新视图
    // useEffect(() => {
    //     const newState = store.getState().AsyncThunkCount;
    //     setCount(newState)
    // }, []);


    // const unsubscribe = store.subscribe(() => { ... });
    // 语句是在useEffect钩子内部定义的副作用函数的一部分。这个副作用函数将会在组件挂载时执行，
    // 并通过store.subscribe()方法订阅Redux store的变化。
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newState = store.getState().AsyncThunkCount;
            setCount(newState)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const asyncPlus =  () => {
        // store.dispatch(getAsyncPlus())
        store.dispatch(AsyncAction.getAsyncPlus())
    }
    const asyncTime =  () => {
        store.dispatch(AsyncAction.getAsyncTime())
    }
    const asyncMinus =  () => {
    }
    const asyncDivide =  () => {
    }
    return (
        <div>
            <button onClick={asyncTime}>X</button>
            <button onClick={asyncPlus}>+</button>
            当前值:<span>{asyncCount.count}</span>
            <button onClick={asyncMinus}>-</button>
            <button onClick={asyncDivide}>÷</button>
        </div>

//     在React中，<button onClick={asyncPlus}>+</button>和 <button onClick={() => asyncPlus()}>+</button>
//     之间的区别是如何处理 onClick 事件的方式。
//
// <button onClick={asyncPlus}>+</button>：这种写法直接将 asyncPlus
//     函数作为 onClick 事件处理程序传递给按钮。当按钮被点击时，asyncPlus 函数会被调用。这种写法在函数组件中是常见的做法，
//     因为它可以直接引用函数并传递给 onClick，避免了额外的函数创建。
//
// <button onClick={() => asyncPlus()}>+</button>：这种写法使用了一个匿名的箭头函数作为 onClick
//     事件处理程序，并在该函数内部调用 asyncPlus 函数。当按钮被点击时，箭头函数会被调用，然后再调用 asyncPlus 函数。
//     这种写法适用于需要传递参数或执行其他逻辑的情况。
//
// 需要注意的是，第二种写法中使用了一个匿名函数，每次渲染组件时都会创建一个新的函数实例。这可能会导致性能问题，特别是在具有大
//     量子组件的列表中。因此，在没有特殊需求的情况下，推荐使用第一种写法来直接传递函数引用。
    )
}