const defaultState = [];
// 形参也可以指定默认状态
export default (state =defaultState,action)=>{
    switch(action.type){
        case 'addName':
            return [...state, action.payLoad];
        case 'kill':
            // console.log('ac', action)
            return state.filter((item, index) => index !== action.payLoad.killIndex);
            // console.log('ac', action.payLoad)
            // return state.slice(0,action.payLoad.killIndex).concat(state.slice(action.payLoad.killIndex +1))
            // return state.filter((item,index)=>{ return index !== action.payLoad.killIndex})
            // return state.filter((item, index) => index !== action.payLoad.killIndex);
        default:
            return state;
    }
}
