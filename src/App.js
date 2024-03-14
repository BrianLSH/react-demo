import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./component/playRedux/UserInfo";
import ProInfo from "./component/playRedux/ProInfo";
import HomePage from "./component/HomePage";
import TestRouter from "./component/TestRouter/TestRouter";
import SecondRouter from "./component/TestRouter/SecondRouter";
import NotFound from "./component/NotFound/NotFound";
import ShowRedux from "./component/playRedux/ShowRedux";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/redux" element={<ShowRedux />} />
                    <Route path="/user" element={<UserInfo/>}/>
                    <Route path="/pro" element={<ProInfo/>}/>
                    <Route path="/1" element={<TestRouter />}>
                        {/*2 前面不能加 / */}
                        {/*需要用out let  在父组件占位符*/}
                        <Route path="2" element={<SecondRouter />} />
                    </Route>
                    <Route path='*' element={ <NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
