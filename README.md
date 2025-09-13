# Personal Finance Tracker - MERN Assignment Submission

📝 **MERN Assignment:** Personal Finance Tracker  

---

## 🚀 Objective
Build a personal finance tracker using the **MERN stack** with **full CRUD functionality**.

---

## ✅ Requirements Implemented

### Backend
- **Node.js + Express + MongoDB**  
- REST API for transactions:
  - Create
  - Read
  - Update
  - Delete  

### Frontend
- **React**
- Routes:
  - `/` → View all transactions
  - `/add` → Add new transaction
  - `/:id/edit` → Edit transaction
  - `/:id/delete` → Delete transaction
- Transaction form supports:
  - `title`  
  - `amount` (+/-)  
  - `date`  
  - `category`  

### Authentication (Bonus Implemented)
- JWT-based user authentication  
- Protected transaction routes  

### Extra Features
- Filter transactions by category or date  
- Responsive UI using Tailwind CSS  
- Deployed on Render (Frontend & Backend)  

---

## 🔧 GitHub
- Public repository with **regular commits**  
- README includes setup instructions and API details  

---




## 🎯 Evaluation Criteria Covered
- ✅ Functional completeness (full CRUD + auth)  
- ✅ Code structure & proper Git usage  
- ✅ Clean and responsive UI/UX  
- ✅ Bonus: authentication, filters, deployment  

---

## 🔗 Live Demo
- **Frontend:** [https://finance-tracker-c2r4.onrender.com](https://finance-tracker-c2r4.onrender.com)  
- **Backend API:** [https://finance-tracker-cfd6.onrender.com](https://finance-tracker-cfd6.onrender.com)  

---



## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker



1. Clone repository:
   ```bash
   git clone https://github.com/Mohit-Y-Kumar/finance-tracker
   cd backend

## Install dependencies:

  npm install
 node server.js
# Create .env file:
  PORT=5000
 MONGODB_URI=<your-mongodb-atlas-uri>
 JWT_SECRET=<your-jwt-secret>
 NODE_ENV=development


Start server (dev mode):

npm run dev


Server runs on http://localhost:5000

Backend deployed URL:

https://finance-tracker-cfd6.onrender.com

 **2.  Frontend Setup**


cd frontend


Install dependencies:

npm install


Update API URLs in frontend

VITE_API_URL=https://finance-tracker-cfd6.onrender.com/api


Start frontend dev server:

npm run dev


# Frontend runs on http://localhost:5173

# Frontend deployed URL:

  https://finance-tracker-c2r4.onrender.com

🗂️ API Routes



Auth Routes:

POST /api/auth/register → Register user

POST /api/auth/login → Login user

Transaction Routes (Protected - JWT required):

GET /api/transactions → Get all transactions

POST /api/transactions → Create transaction

GET /api/transactions/:id → Get single transaction

PUT /api/transactions/:id → Update transaction

DELETE /api/transactions/:id → Delete transaction

# 🔒 Authentication

Uses JWT tokens stored on frontend (localStorage or memory)

Backend protect middleware secures all transaction routes

Pass token in Authorization header:

# CORS setup in backend allows requests from frontend:

    const allowedOrigins = [
    "https://finance-tracker-c2r4.onrender.com",
    "https://finance-tracker-cfd6.onrender.com"
    ];

## Project Structure
personal-finance-tracker/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
    |─ .env
|   
├── frontend/
│   ├── src/
│   ├── public/
    ├── .env
│   └── package.json


├── README.md        

