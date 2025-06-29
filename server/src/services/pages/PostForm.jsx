import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPost,
  updatePost,
  getPost,
  getCategories,
} from "../services/api";

const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // If present, we're editing
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
    if (id) {
      getPost(id).then((res) => setPost(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePost(id, post);
      } else {
        await createPost(post);
      }
      navigate("/");
    } catch (err) {
      console.error("Failed to submit post", err);
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Post" : "Create New Post"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label><br />
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label><br />
          <select
            name="category"
            value={post.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default PostForm;
