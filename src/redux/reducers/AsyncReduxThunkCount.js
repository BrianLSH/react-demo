const defaultState = {
    count: -50
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ASYNC_COUNT_INCREMENT':
            console.log('async plus  2秒后')
            return {
                ...state,
                count: state.count + 1
            }
        case 'ASYNC_COUNT_TIMES':
            return {
                ...state,
                count: state.count*2
            }
        case 'ASYNC_COUNT_MINUS':
            return {
                ...state,
                count:state.count-20
            }
        default:
            return state
    }
}