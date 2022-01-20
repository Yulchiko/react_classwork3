import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ApiService from "../Services/api.service";

import PhotosComponent from "../Components/PhotosComponent";


export default function UserPhotos() {
    let apiService = new ApiService('photos');
    const {id: albumId} = useParams();
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        apiService.getUserPhotos(albumId).then(photos => setPhotos(photos));
    }, [albumId]);

    return (
        <div>

            {
                photos.map(photo => <PhotosComponent key={photo.id} photo={photo} />)
            }
        </div>
    );
}