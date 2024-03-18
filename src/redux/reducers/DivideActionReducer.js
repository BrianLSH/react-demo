const defaultState = { count: -50};

export default(state=defaultState, action)=>{
    switch(action.type) {
        case 'ASYNC_COUNT_DIVIDE':
            return {
                ...state,
                count: action.payLoad/2
            }
        default:
            return state
    }
}