import AsyncAction from "./AsyncAction";
import DivideAction from "./DivideAction";
// count 代表count模块的action集合
// user 代表user模块的action集合
// product 代表product模块的action集合

const action = {
    count:AsyncAction,
    divide:DivideAction,
    product:'',
}

export default action;
