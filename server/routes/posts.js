import express from 'express';
const router = express.Router();

import {
  getPosts,
  getPostById,   // ✅ Correct: must match your controller export
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController.js';

// ✅ ROUTES
router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
