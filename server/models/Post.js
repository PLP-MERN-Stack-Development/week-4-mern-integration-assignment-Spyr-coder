import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;
