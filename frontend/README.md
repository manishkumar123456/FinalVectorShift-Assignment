# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

//- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


To start frontend

    * cd frontend
    * npm install
    * npm run dev   // to start

Installation

Prerequisites
Node.js
Python 3.7+
FastAPI



Frontend Setup

Navigate to the frontend directory:
    * cd frontend

Install dependencies:
    * npm install

Start the development server:
    * npm run dev

--------------------------------------------------

Backend Setup

Navigate to the backend directory:
    * cd backend

Create a virtual environment:
    * python -m venv venv

Activate the virtual environment:
On Windows:
    * venv\Scripts\activate

On macOS/Linux:
    * source venv/bin/activate


Start the FastAPI server:
    * uvicorn main:app --reload


