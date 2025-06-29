// ✅ client/src/pages/PostList.jsx
import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/api";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <h2>All Posts</h2>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Category: {post.category}</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
