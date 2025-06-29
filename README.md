
 📚 MERN Blog Application

This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** blog application developed for **Week 4: Deep Dive into MERN Stack Integration**.

---

🚀 Project Overview

This application demonstrates:
- CRUD operations for **Blog Posts**
- CRUD operations for **Categories**
- Seamless integration between **frontend React app** and **backend Express API**
- MongoDB for persistent storage
- API routes with proper RESTful design
- State management using React hooks
- Basic input validation with `express-validator`

---

 🗂️ Directory Structure

```

.
├── client/       # React frontend (Vite)
├── server/       # Express backend
├── .env.example  # Sample environment variables
├── README.md

````

---

 ⚙️ Setup Instructions

1️⃣ **Clone the repository**

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd week-4-mern-integration-assignment-Spyr-coder
````

2️⃣ **Install dependencies**

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3️⃣ **Configure Environment**

Create `.env` files for your environment:

```env
# server/.env
MONGO_URI=mongodb://127.0.0.1:27017/mernblog
```

4️⃣ **Run the servers**

```bash
# Start server
cd server
npm run dev

# Start client (new terminal)
cd client
npm run dev
```

The React app will run on `http://localhost:5173` (Vite default).
The API server will run on `http://localhost:5000`.

---

 🌐 API Documentation

### 📄 Posts

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/posts`     | Get all posts           |
| GET    | `/api/posts/:id` | Get a single post by ID |
| POST   | `/api/posts`     | Create a new post       |
| PUT    | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a post by ID     |

### 🗂️ Categories

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/api/categories` | Get all categories    |
| POST   | `/api/categories` | Create a new category |

---

## ✅ Features Implemented

* [x] Full CRUD for posts and categories
* [x] MongoDB database connection with Mongoose
* [x] RESTful API design with Express.js
* [x] React client with forms for create/update
* [x] React Router for navigation
* [x] Validation with `express-validator`
* [x] Environment variables for secure config

---

## 🧪 Testing Instructions

* Create a new category (use Postman or curl).
* Create a new post linked to that category.
* Edit or delete posts.
* Check MongoDB with `mongosh` to confirm data.

---

## 📸 Screenshots

![Screenshot From 2025-06-29 15-31-44](https://github.com/user-attachments/assets/f90b0e9a-8bb4-4570-8f48-a5b61164219a)
![Screenshot From 2025-06-29 15-31-57](https://github.com/user-attachments/assets/6186626f-e854-4fa2-a92f-ed211c6de955)


---

🤝 Submission

✔️ Pushed to GitHub with:

* Complete client & server code
* `.env.example` for both parts
* README with clear instructions
  
When you’re done, **commit** it and **push**:

```bash
git add README.md
git commit -m "Add complete README"
git push
````
