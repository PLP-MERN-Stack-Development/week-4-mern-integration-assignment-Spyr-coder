// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // will be proxied to http://localhost:5000 via vite.config.js
});

// Post-related requests
export const getPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Category-related requests
export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
