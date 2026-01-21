AI-Student-Assistant-Chatbot

![Python](https://img.shields.io/badge/Python-3.x-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![License](https://img.shields.io/badge/License-Educational-lightgrey)

An AI-powered student support system built with a modern full-stack architecture. The application uses NLP and a Retrieval-Augmented Generation (RAG) approach to provide accurate, context-aware answers to academic questions.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [How It Works](#how-it-works)
* [Use Cases](#use-cases)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## Features

* AI-based academic question answering
* Retrieval-Augmented Generation (RAG)
* Fast and scalable REST API
* Clean and responsive web interface
* Modular and extensible codebase
* Easy local setup for development

---

## Tech Stack

### Backend

* **Python**
* **FastAPI** – High-performance API framework
* **Scikit-learn** – Vectorization and similarity search
* **CSV Dataset** – Knowledge base
* **Pickle** – Stored trained models

### Frontend

* **React.js**
* **Node.js / npm**
* Modern component-based UI

---

## Project Structure

```
ai-student-assistant/
│
├── backend/
│   ├── app/
│   │   ├── ai/          # RAG and query logic
│   │   ├── data/        # Dataset files
│   │   ├── models/      # Trained ML models
│   │   ├── routers/     # API routes
│   │   └── main.py      # FastAPI entry point
│   └── requirements.txt
│
├── frontend/
│   ├── src/             # React source code
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

* Python 3.x
* Node.js & npm

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at: `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

## How It Works

1. User submits a question through the frontend.
2. The query is sent to the FastAPI backend.
3. Text is vectorized and matched against the dataset.
4. Relevant context is retrieved using RAG logic.
5. The response is returned and displayed to the user.

---

## Use Cases

* Student academic assistance
* AI chatbot demos
* NLP & ML learning projects
* Educational platforms

---

