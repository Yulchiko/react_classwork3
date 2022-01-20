import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ApiService from "../../Services/api.service";
import PostComponent from "../../Components/PostComponent";


export default function UserPosts() {
    let apiService = new ApiService('posts');
    const {id: userId} = useParams();
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getUserPosts(userId).then(posts => setPosts(posts));
    }, [userId]);

    return (
        <div>
            <h4>USER POSTS</h4>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
}