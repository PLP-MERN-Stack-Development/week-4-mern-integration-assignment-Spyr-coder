import { useState, useEffect } from "react";
import { createCategory, getCategories } from "../services/api";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await createCategory({ name });
      setName("");
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div>
      <h2>📁 Create New Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>

      <h3>📚 Available Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryForm;
