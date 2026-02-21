# 🚀 Scalable Task Management Web App

A full-stack web application built with **React + Node.js + Express + MongoDB** implementing secure authentication, protected routes, and full CRUD functionality with search & filter UI.

---

## 📌 Project Overview

This project is a scalable task management dashboard featuring:

- 🔐 JWT-based Authentication (Register / Login / Logout)
- 🛡 Protected Routes
- 📦 Full CRUD Operations on Tasks (Sample Entity)
- 🔎 Search and Filter UI
- 🎨 Modern UI with TailwindCSS + Framer Motion
- 🔑 Password Hashing with bcrypt
- ⚙ Clean Modular Backend Architecture

The system is designed with scalability and maintainability in mind.

---

## 🏗 Tech Stack

### Frontend
- React.js
- TailwindCSS
- Framer Motion
- Axios
- React Context API
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

---

## 📂 Project Structure

### Backend (Node.js + Express + MongoDB)
```
backend/
│
├── config/
│   └── db.js                
│
├── controllers/
│   ├── authController.js    
│   └── taskController.js    
│
├── middleware/
│   ├── authMiddleware.js    
│   └── errorMiddleware.js   
│
├── models/
│   ├── User.js              
│   └── Task.js              
│
├── routes/
│   ├── authRoutes.js        
│   └── taskRoutes.js        
│
├── utils/
│   └── generateToken.js     
│
├── .env                     
├── server.js                
└── package.json             

```

### Frontend (React + Vite + Tailwind CSS)

```
frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── axios.js          
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx   
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx  
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env                     
└── package.json             

```

---

---

## 🏗 Architecture Overview

```
                ┌────────────────────┐
                │      Frontend      │
                │  React + Tailwind  │
                └─────────┬──────────┘
                          │
                          │ HTTP (Axios + JWT)
                          ▼
                ┌────────────────────┐
                │      Backend       │
                │  Node + Express    │
                ├────────────────────┤
                │  Auth Middleware   │
                │  Controllers       │
                │  Error Middleware  │
                └─────────┬──────────┘
                          │
                          │ Mongoose ORM
                          ▼
                ┌────────────────────┐
                │      MongoDB       │
                │  User + Task Data  │
                └────────────────────┘
```

### Flow Explanation

1. User interacts with React frontend  
2. Axios sends requests with JWT token  
3. Express middleware validates token  
4. Controller handles business logic  
5. Mongoose interacts with MongoDB  
6. Response sent back to frontend  

The architecture follows clear separation of concerns and is designed for scalability.

---

## 🔐 Authentication Flow

1. User registers → password hashed with bcrypt
2. JWT token generated on login
3. Token stored in localStorage
4. Axios interceptor attaches token automatically
5. Protected routes validate token via middleware

---

## 📦 CRUD Operations (Tasks)

Each authenticated user can:

- Create a task
- View their tasks
- Update their tasks
- Delete their tasks
- Search tasks (title/description)
- Filter by status (Pending / Completed)

Tasks are user-specific and protected by ownership validation.

---

## 🔄 API Endpoints

### Auth Routes
POST   /api/auth/register  
POST   /api/auth/login  
GET    /api/auth/profile  

### Task Routes
GET    /api/tasks  
POST   /api/tasks  
PUT    /api/tasks/:id  
DELETE /api/tasks/:id  


---

## 🛡 Security Practices Implemented

- Password hashing using bcrypt  
- JWT authentication  
- Protected route middleware  
- Token validation  
- User ownership verification for tasks  
- Error handling middleware  
- Environment variable configuration  


---

## 📈 Scalability Considerations

- Modular backend architecture  
- Separation of concerns (routes/controllers/models)  
- Context-based frontend auth management  
- Axios interceptor for centralized API config  
- Functional state updates to prevent stale data bugs  
- Defensive UI handling for unexpected API shapes

---

## 🚀 Production Deployment Notes

This application can be deployed using:

### Backend Deployment 
- Render

### Frontend Deployment
- Vercel

### Environment Variables Required (Production)

Backend:
```
PORT
MONGO_URI
JWT_SECRET
NODE_ENV=production
```

Frontend:
```
VITE_API_BASE_URL=https://your-backend-url/api
```
--- 

## 📬 API Postman Collection

A Postman collection is included for API testing.

### How to Use

1. Open Postman
2. Import the file:
   ```
   postman_collection.json
   ```
3. Set environment variable:
   ```
   base_url = http://localhost:5000/api || https://your-backend-url/api
   ```
4. Test:
   - Register
   - Login (copy JWT token)
   - Add token in Authorization → Bearer Token
   - Test all task routes

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Vivek-DK/TaskManagement.git
cd TaskManagement
```

## 2️⃣ Backend Setup

```
cd backend
npm install
```

### Create .env file inside Backend/

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Start backend

```
node server.js
```

## 3️⃣ Frontend Setup

```
cd Frontend
npm install
npm run dev
```

### Create .env file inside Backend/

```
VITE_API_BASE_URL= 'https://your-backend-url/api'
```

### Frontend runs on:
https://task-management-vivek.vercel.app/

### Backend runs on:
https://taskmanagement-cgzz.onrender.com

---


### Future production improvements could include:

- Refresh token rotation  
- Role-based authorization  
- Redis caching  
- Pagination for tasks  
- Docker containerization  
- CI/CD pipeline  


---

## 🎨 UI/UX Highlights

- Glassmorphism dashboard layout  
- Smooth animations via Framer Motion  
- Responsive design  
- Clean dark theme dashboard  
- Interactive task cards  


---

## 🧪 Testing Instructions

1. Register a new user  
2. Login  
3. Create tasks  
4. Edit and delete tasks  
5. Refresh page (session persists)  
6. Logout and confirm protected route restriction  


---

## 📬 Submission

This project was built as part of a Frontend Developer Internship assessment to demonstrate:

- Full-stack integration  
- Secure authentication  
- Clean UI/UX  
- Scalable architecture  


---

## 👨‍💻 Author

Vivek D K

Frontend Developer
