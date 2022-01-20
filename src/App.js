import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout"
import Users from "./pages/Users"
import UserPhotos from "./pages/UserPhotos"
import Comments from "./pages/Comments"
import UserDetails from "./pages/UserDetails";
import Photos from "./pages/Posts/Photos";
import PhotosDetails from "./pages/Posts/PhotosDetails";
import PhotosAlbums from "./pages/Posts/PhotosAlbums";
import Posts from "./pages/Posts/Posts";

import './App.css';


function App() {
    return (
        <div className="Layout">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="users" element={<Users/>}>
                        <Route path=":id" element={<UserDetails/>}>
                            <Route path="posts" element={<Posts/>}/>
                        </Route>
                        <Route path=":albumId" element={<PhotosAlbums/>}>
                            <Route path="photos" element={<UserPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path="photos" element={<Photos/>}>
                        <Route path=":id" element={<PhotosDetails/>}>
                            <Route path="comments" element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
            );
            }

    export default App;
