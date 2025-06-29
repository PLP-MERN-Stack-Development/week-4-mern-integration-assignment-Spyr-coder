// ✅ server/server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// ✅ Routes
import postRoutes from './routes/posts.js';
import categoryRoutes from './routes/categoryRoutes.js'; // <-- THIS MUST BE HERE

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes); // <-- THIS MUST BE MOUNTED TOO

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Connect to DB
mongoose.connect(process.env.MONGO_URI, { dbName: 'mernblog' })
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
