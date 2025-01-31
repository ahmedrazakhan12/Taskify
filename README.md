
---

# Taskify - Task Management Application

Taskify is a task management web application that allows users to track and manage their tasks. The app has four task statuses: **To-Do**, **In-Progress**, **Review**, and **Done**. Users can register, log in, and authenticate to manage their tasks. The app also supports drag-and-drop functionality to update task statuses.

### Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: Sequelize (with a SQL database)
- **Authentication**: JWT (JSON Web Token)

---

## Features

- User Authentication (Login/Register)
- Task management with drag-and-drop functionality
- 4 task statuses: **To-Do**, **In-Progress**, **Review**, **Done**
- Full-stack application with a backend using Node.js and Express.js
- Frontend UI made with React.js and styled using Tailwind CSS

---

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (LTS version or above)
- **npm** (Node Package Manager)

If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

---

## Setup and Installation

### Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/ahmedrazakhan12/Taskify.git
```

Navigate to the project folder:

```bash
cd Taskify-main
```

### Frontend Setup (React.js)

1. Navigate to the **frontend** folder:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

### Backend Setup (Node.js & Express.js)

1. Navigate to the **backend** folder:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

---

## Configuration

1. Create a `.env` file in the **backend** folder to store environment variables such as your database credentials and JWT secrets. Here's an example of the configuration you'll need to add to the `.env` file:

   ```
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=''
    DB_NAME=taskify
    JWT_SECRET=testing123
    TASK_STATUSES=todo,in-progress,review,done

   ```

2. Update your Sequelize configuration if needed in `backend/config/database/database.js`.

---

## Running the Application

### Development Mode

1. **Frontend**:

   - Go to the **frontend** directory if you're not already there:

     ```bash
     cd frontend
     ```

   - Run the React development server:

     ```bash
     npm run dev
     ```

   - Open your browser and navigate to `http://localhost:5173` to see the frontend in action.

2. **Backend**:

   - Go to the **backend** directory if you're not already there:

     ```bash
     cd backend
     ```

   - Start the backend server:

     ```bash
     npm run dev
     ```

   - The backend server will be running on `http://localhost:5000` by default.

---

## Usage

1. **Frontend**: You can interact with the UI to:
   - Register/Login to your account
   - Create tasks and drag them to update their status between **To-Do**, **In-Progress**, **Review**, and **Done**


2. **Backend**: The backend provides the necessary API routes to manage user authentication and tasks:
   - **POST** `/api/auth/register`: Register a new user
   - **POST** `/api/auth/login`: Log in and receive a JWT token
   - **GET** `/api/tasks`: Fetch all tasks for the logged-in user
   - **POST** `/api/tasks`: Create a new task
   - **PUT** `/api/tasks/:id`: Update a task's Details
   - **post** `/api/tasks/update-status`: Update a task's status
   - **delete** `/api/tasks/:id`: Deletes a task

---

## Database

This application uses Sequelize to interact with a SQL database. The database schema includes tables for users and tasks.

1. Run the Sequelize migrations to set up the database:

   ```bash
   npx sequelize-cli db:migrate
   ```

2. Make sure you have the correct database credentials configured in your `.env` file.

---


## License

This project is developed by Ahmed Raza Khan (03335881939) 

---