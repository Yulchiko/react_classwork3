import React, {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import ApiService from "../Services/api.service";
import "./UserDetail.css"

const userApiService = new ApiService('users')

export default function UserDetails() {
    const {id} = useParams();

    const [user, setUser] = useState(null)

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userApiService.getSingleData(id).then(value => setUser({...value}));
    }, [id]);


    return (
        <>
            <div>
                {user && (

                    <div className="UserDetail">
                        <h2>User</h2>
                        <div>id:{user.id}</div>
                        <div>name:{user.name}</div>
                        <div>username:{user.username}</div>
                        <div>email:{user.email}</div>
                        <div className="address">
                            address:
                            <div>street:{user.address.street}</div>
                            <div>suite:{user.address.suite}</div>
                            <div>city:{user.address.city}</div>
                            <div>zipcode:{user.address.zipcode}</div>
                            <div className="geo">
                                geo:
                                <div>lat:{user.address.geo.lat}</div>
                                <div>lng:{user.address.geo.lng}</div>
                            </div>
                        </div>
                        <div>phone:{user.phone}</div>
                    </div>
                )}
                <div>
                    <Link to="posts">
                        <button>Show all posts</button>
                    </Link>
                </div>
                <Link to="photos">
                    <button>Show all photos</button>
                </Link>
            </div>
            <Outlet/>
        </>
            );
            };