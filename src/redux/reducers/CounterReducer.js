export default (state = {count:0}, action)=>{
    switch (action.type){
        case 'add':
            // console.log('add', action)
            return {count: state.count + 1};
        case 'minus':
            console.log('minus', action)
            return {count: state.count - 1};
        default:
            return state;
    }
}