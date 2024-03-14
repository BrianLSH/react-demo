import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./component/playRedux/UserInfo";
import ProInfo from "./component/playRedux/ProInfo";
import HomePage from "./component/HomePage";
import TestRouter from "./component/TestRouter/TestRouter";
import SecondRouter from "./component/TestRouter/SecondRouter";
import NotFound from "./component/NotFound/NotFound";

// export default 引入不需要 {}    export const 需要{}结构
import {ShowRedux} from "./component/playRedux/ShowRedux"
import {Counter as Count} from "./component/playRedux/Counter";  // export const xxx = ()=>{}
// import ShowRedux from "./component/playRedux/ShowRedux"  export function xx(){}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    {/*redux使用*/}
                    <Route path="/redux" element={<ShowRedux />} />
                    {/*计算器*/}
                    <Route path= "/count" element={<Count />} />


                    <Route path="/user" element={<UserInfo/>}/>
                    <Route path="/pro" element={<ProInfo/>}/>

                    {/*路由嵌套*/}
                    <Route path="/1" element={<TestRouter />}>
                        {/*2 前面不能加 / */}
                        {/*需要用out let  在父组件占位符*/}
                        <Route path="2" element={<SecondRouter />} />
                    </Route>

                    {/*404*/}
                    <Route path='*' element={ <NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
