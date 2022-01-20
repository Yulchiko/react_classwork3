import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import ApiService from "../Services/api.service";
import UserComponent from "../Components/UserComponent";
import "./Users.css"


export default function Users() {
    let apiService = new ApiService('users')
    let [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAllData()
            .then(value => setUsers(value));
    }, []);


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
            <div className="Outlet"> <Outlet/></div>
        </div>
    );
}