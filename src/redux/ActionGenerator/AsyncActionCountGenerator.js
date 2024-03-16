export const getAsyncPlus = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:'INCREMENT',
                payLoad:{count:200}
            })
        },5000);
        // redux-thunk 需要手动派发

    }

}