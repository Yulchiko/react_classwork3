import {Link} from "react-router-dom";

import  "./PComponen.css"


export default function PComponents({photo}) {
const {id, title, thumbnailUrl} = photo;

    return (
        <div>
            <div className="Id_title"> <div>{id}</div>
            <div>{title}</div>
            <img src = {thumbnailUrl} alt="patch"/></div>
            <Link to={id.toString()} state={photo}> <button>   details</button></Link>
        </div>
    )
}