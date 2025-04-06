# StudyNest

Welcome to **StudyNest**, a comprehensive platform designed for seamless collaboration between teachers and students. This application integrates modern technologies to provide features like class management, note sharing, quiz generation, and real-time communication.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Frontend Overview](#frontend-overview)
4. [Backend Overview](#backend-overview)
5. [Setup Instructions](#setup-instructions)
6. [Environment Variables](#environment-variables)
7. [Endpoints](#endpoints)
8. [Running the Application](#running-the-application)
9. [Notes](#notes)

---

## Features

- User authentication (teacher and student roles).
- Class creation and management.
- Notes upload and retrieval (text and PDF).
- Quiz generation based on uploaded notes.
- Real-time chat functionality for classes.

---

## Technologies Used

### Frontend

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Real-time Communication**: WebSocket integration

### Backend

- **Framework**: Flask
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: GridFS
- **Real-time Communication**: Flask-SocketIO
- **AI Integration**: Google Generative AI (Gemini API)

---

## Frontend Overview

The frontend is built using **Next.js**, providing a fast and responsive user interface. Key features include:

- Dynamic routing for pages.
- Integration with the backend for seamless data exchange.
- Real-time updates using WebSocket.

To start the frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Overview

The backend is powered by **Flask**, offering robust APIs for managing classes, notes, quizzes, and chat functionality. It also integrates AI for quiz generation.

### DB Diagram

![DB Diagram](diagram-export-3-31-2025-8_52_24-PM)

---

## Setup Instructions

### Clone the repository:

```bash
git clone <repository-url>
cd StudyNest
```

### Install dependencies:

#### Frontend:

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd backend
pip install -r requirements.txt
```

### Set up the environment variables:

Create a `.env` file in the `backend` directory and add the following:

```
GEMINI_API_KEY=<your-gemini-api-key>
JWT_SECRET_KEY=<your-jwt-secret-key>
MONGO_URI=mongodb://localhost:27017
```

### Start the MongoDB server:

```bash
mongod
```

### Run the application:

#### Frontend:

```bash
npm run dev
```

#### Backend:

```bash
python backend/app.py
```

---

## Environment Variables

| Variable           | Description                        |
| ------------------ | ---------------------------------- |
| `GEMINI_API_KEY` | API key for Google Generative AI.  |
| `JWT_SECRET_KEY` | Secret key for JWT authentication. |
| `MONGO_URI`      | MongoDB connection URI.            |

---

## Endpoints

### Authentication

| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| POST   | `/auth/signup` | Register a new user.        |
| POST   | `/auth/login`  | Log in and get a JWT token. |

### Classes

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/classes/`        | Create a new class (teacher).  |
| POST   | `/classes/join`    | Join a class using a code.     |
| GET    | `/classes/teacher` | Get all classes for a teacher. |
| GET    | `/classes/student` | Get all classes for a student. |

### Notes

| Method | Endpoint                      | Description                 |
| ------ | ----------------------------- | --------------------------- |
| POST   | `/notes/`                   | Upload notes (text or PDF). |
| GET    | `/notes/class/<class_id>`   | Get all notes for a class.  |
| GET    | `/notes/<note_id>/download` | Download a PDF note.        |

### Quizzes

| Method | Endpoint                                  | Description                        |
| ------ | ----------------------------------------- | ---------------------------------- |
| POST   | `/quizzes/generate`                     | Generate a quiz (teacher only).    |
| GET    | `/quizzes/<quiz_id>`                    | Get a student's personalized quiz. |
| POST   | `/quizzes/<quiz_id>/submit`             | Submit a quiz (student only).      |
| GET    | `/quizzes/assignments/<quiz_id>/scores` | Get quiz scores (teacher).         |

### Chat

| Method | Endpoint                      | Description                        |
| ------ | ----------------------------- | ---------------------------------- |
| POST   | `/chat/messages`            | Post a message in a class chat.    |
| GET    | `/chat/messages/<class_id>` | Get all messages for a class chat. |

---

## Running the Application

1. Ensure MongoDB is running locally.
2. Start the Flask backend:
   ```bash
   python backend/app.py
   ```
3. Start the Next.js frontend:
   ```bash
   npm run dev
   ```
4. Access the application at [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## Notes

- Ensure you have the required API keys and environment variables set up before running the application.
- Use tools like Postman or cURL to test the endpoints.
- For real-time chat, use a WebSocket client to connect to the `/chat` namespace.
