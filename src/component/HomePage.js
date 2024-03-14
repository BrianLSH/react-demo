import react from "react";
import {Outlet} from "react-router-dom";

function HomePage() {
    return (
        <>
            <div>homepage</div>
            <Outlet></Outlet>
        </>
    )
}

export default HomePage