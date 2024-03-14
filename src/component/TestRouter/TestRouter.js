import react from "react";
import {Outlet} from "react-router-dom";

function TestRouter() {
    return (
        <>
        一级路由
            <Outlet></Outlet>
        </>
    )
}

export default TestRouter