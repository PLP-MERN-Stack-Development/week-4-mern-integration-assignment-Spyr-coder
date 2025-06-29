import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/api";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this post?")) {
      try {
        await deletePost(id);
        setPosts(posts.filter((p) => p._id !== id));
      } catch (err) {
        console.error("Failed to delete post:", err);
      }
    }
  };

  return (
    <div>
      <h1>📝 Blog Posts</h1>
      <Link to="/create">
        <button>Create Post</button>
      </Link>
      {loading && <p>Loading posts...</p>}
      {!loading && posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post) => (
        <Post key={post._id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
