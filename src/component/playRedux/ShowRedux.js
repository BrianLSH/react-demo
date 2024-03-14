import react, {useEffect, useState} from "react";
import store from "../../redux/store";
export const ShowRedux = () => {

    const [initData, setInitData] = useState([]);
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newState = store.getState().NameReducer;
            console.log('newState',newState)
            setInitData((prevState)=>{
                return newState
            })
        });
        return () => {
            console.log('cancel')
            unsubscribe();
        };
    }, []);
    // 执行两次
    // store.subscribe(()=>{
    //     console.log('store.getState()+++', store.getState())
    // })


    const handleName = ()=>{
        let newName = document.getElementById('getName').value;
        if (!newName) {
            alert('name不能空');
        }else{
            store.dispatch({type:'addName', payLoad:{name:newName}})
        }

    }
    const killHim = (index)=>{
        console.log('index', index)
        store.dispatch({type:'kill', payLoad:{killIndex:index}})
    }
    return (
        <>
           重要人物 <input id='getName' type="text"/>
            <button onClick={handleName}>提交</button>

            {/*jsx map便利  要用  () 括號*/}

            {initData && initData.map((item, index)=>(
                <div key={index}>
                    <span>{item.name}</span>

                    {/*在代码中，删除按钮只触发一次的问题是因为您在 onClick 属性中立即调用了 killHim(index) 函数。*/}
                    {/*这将导致每次渲染时都会立即调用该函数，而不是在点击按钮时才调用。*/}
                    {/*<button onClick={killHim(index)}>枪毙</button>*/}
                    <button onClick={()=>{killHim(index)}}>删除</button>


                </div>
                )
            )}
            {/*{initData && initData.map((item, index)=>{*/}
            {/*    return (*/}
            {/*        <h1 key={index}>{item.name}</h1>*/}
            {/*    )*/}
            {/*    }*/}
            {/*)}*/}
        </>
    )
}
