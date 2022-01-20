import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import ApiService from "../../Services/api.service";
import PComponents from "../../Components/PComponents";
import "./Posts.css"

export default function Photos() {
    let apiService = new ApiService('photos')
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        apiService.getAllData()
            .then(value => setPhotos(value));
    }, []);

    return (
        <div>
            <div className="Posts"> <Outlet/></div>
            <div className="Post"> {
                photos.map(photo => <PComponents key={photo.id} photo={photo}/>)
            }</div>
        </div>
    );
}