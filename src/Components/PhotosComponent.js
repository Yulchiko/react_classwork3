import "./PhotoComponent.css"

export default function PhotosComponent({photo}) {
    const {albumId, id, title, thumbnailUrl} = photo;
    return (
        <div className="Photos">
            <div className="Title"><div >albumId: {albumId}</div>
            <div >Id: {id}</div>
            <div>Title: {title}</div></div>
            <img className="Thumbnail" src={thumbnailUrl} alt="patch"/>

        </div>
    );
}