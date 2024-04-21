import axios from 'axios';

const URL = 'https://server-memo-application.onrender.com/posts';

// Here you can change localhost to the generated link
// As you can see, I used Render in this case for server deployment

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
