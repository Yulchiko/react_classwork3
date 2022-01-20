const baseURL = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
    photos: '/photos'

}


export default function ApiService(endpoint) {
    this.getAllData = () => fetch(`${baseURL}/${endpoint}`)
        .then(value => value.json())
    this.getSingleData = (id) => fetch(`${baseURL}/${endpoint}/${id}`)
        .then(value => value.json())
    this.getUserPhotos = (albumId) => fetch(`${baseURL}/users/${albumId}/photos`)
        .then(value => value.json())
    this.getPhotosComments = (postId) => fetch(`${baseURL}/photos/${postId}/comments`)
        .then(value => value.json())
    this.getUserPosts = (userId) => fetch(`${baseURL}/users/${userId}/posts`)
        .then(value => value.json())
}
