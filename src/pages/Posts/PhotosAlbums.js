import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import ApiService from "../../Services/api.service";

const userApiService = new ApiService('photos')

export default function PhotosAlbums() {
    const {id} = useParams();

    const [photos, setPhotos] = useState(null)
    useEffect(() => {
        userApiService.getAllData(id).then(photos => {
            setPhotos(photos);
        })
    }, [id]);

    return <>
        <div><Outlet/>
            <h3>details about photo</h3>
            {JSON.stringify(photos)}

        </div>

    </>;
}