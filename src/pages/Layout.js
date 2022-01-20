import {Link, Outlet} from "react-router-dom";

import "./Layout.css"

export default function Layout() {
    return (
        <div className="App">
            <div className="Menu">
                <ul className="Ul">
                    <ol>
                        <Link to="/users">USERS</Link> &nbsp;
                        <Link to="/photos">PHOTOS</Link>
                    </ol>
                </ul>
            </div>
            <div className="All"> <Outlet/></div>
            <div className="Router">
                @ReactRouterDom
            </div>
        </div>
    )
}

