const defaultState = {
    count: -50
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('async plus  5秒后')
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}