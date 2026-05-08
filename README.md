# Contact-Manager-API

A secure RESTful backend API built using Node.js, Express.js, MongoDB, and JWT Authentication.  
This application allows users to register, authenticate, and manage their personal contacts securely.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication & Authorization
- Password Hashing using bcrypt
- CRUD Operations for Contacts
- Protected Private Routes
- User-specific Contact Management
- Proper Error Handling Middleware
- MongoDB Database Integration
- RESTful API Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- express-async-handler

---

## 📂 Project Structure

```bash
project-root/
│
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── package.json
```

---

## 🔐 Authentication Flow

1. User registers an account
2. Password is hashed before storing
3. User logs in using email & password
4. Server generates JWT access token
5. Protected routes require valid token

---

## 📌 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register user |
| POST | /api/users/login | Login user |
| GET | /api/users/current | Current logged-in user |

### Contact Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/contacts | Get all contacts |
| POST | /api/contacts | Create contact |
| GET | /api/contacts/:id | Get single contact |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |

---

## ⚠️ Security Features

- Password hashing with bcrypt
- JWT token validation
- Protected private routes
- User ownership verification
- Centralized error handling

---

## 🧪 API Testing

This project was tested using:

- Thunder Client
- Postman

---


## 📖Outcomes

- REST API development
- Authentication & Authorization
- Service Layer Architecture
- Error Handling Middleware
- MongoDB CRUD Operations
- Secure Backend Development Practices

