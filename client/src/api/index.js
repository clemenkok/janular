import axios from 'axios';

// returns all posts in DB
const url = 'http://localhost:5000/posts';

// now we focus on adding Redux capabilities. Great for scalability.

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);