import React, {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import ApiService from "../../Services/api.service";

const userApiService = new ApiService('photos')

export default function PhotosDetails() {
    const {id} = useParams();
    const [photo, setPhoto] = useState(null)
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPhoto(state);
            return;
        }
        userApiService.getSingleData(id).then(value => setPhoto({...value}));
    }, [id]);


    return (
        <>
            <div>
                {photo && (
                    <div>
                        <h2>Photo</h2>
                        <div>Id:{photo.id}</div>
                        <div>AlbumId:{photo.albumId}</div>
                        <div>Title:{photo.title}</div>
                    </div>
                )}
                <div>
                    <Link to="comments">
                        <button>Show all comments</button>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
};




