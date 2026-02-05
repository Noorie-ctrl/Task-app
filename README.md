# Task Manager

# Description
Task Manager is a simple and user-friendly web application built to help users create, view, update, and manage daily tasks efficiently. The application provides a clean interface for adding new tasks, editing existing ones, and displaying all tasks in an organized list. It demonstrates a practical implementation of CRUD (Create, Read, Update, Delete) operations using a mock backend server.

The frontend is developed with React and TypeScript, ensuring type safety and maintainable code, while Vite is used for fast development and optimized builds. A mock REST API is powered by JSON Server, which simulates real backend behavior and allows seamless communication between the client and server during development.

# Features
The application allows users to create tasks through a form, view a list of all tasks, update task details, and manage task data through API calls. The project structure is modular, with reusable components and a clear separation of concerns between UI components, API logic, and type definitions.

# Tech Stack
The Task Manager app is built using React with TypeScript for the frontend, Vite as the build tool, and CSS for styling. The mock backend is implemented using JSON Server, which provides RESTful API endpoints for task data management. Node.js and npm are used for dependency management and running scripts.

# Mock Server
The application uses JSON Server as a mock backend. The server is responsible for handling task data and simulating real API requests such as fetching tasks, creating new tasks, and updating existing ones. This setup makes the app ideal for development and learning purposes without requiring a real backend.

# Installation and Setup
After pulling the repository (Task repo link)[https://github.com/Noorie-ctrl/Task-app.git] navigate into the project directory using your terminal. Install the client dependencies by running `npm install`.

Next, open a new terminal session and navigate into the server directory (basic-task-server). Install the server dependencies by running `npm install` there as well.

Once both installations are complete, start the mock server by running `npm start` in the server directory. Then, return to the client directory and run `npm run dev` to start the frontend application.

# Running the Application
After starting both the server and the client, open your browser and navigate to the local development URL provided by Vite (usually http://localhost:5173). The application will connect to the JSON Server and display the Task Manager interface.

# Project Structure
The project is organized with a clear folder structure. Components such as TaskForm, TaskItem, and TaskList handle the UI logic, while API calls are centralized in the api directory. Type definitions are stored separately to maintain type safety and improve code readability.

# Notes
This project is intended for learning and development purposes. JSON Server is used as a mock backend and is not recommended for production use. The setup, however, closely mirrors real-world frontend and backend interaction, making it a solid foundation for future expansion.
