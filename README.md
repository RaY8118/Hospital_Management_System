# Hospital Management System

This project is a web application built with the MERN stack (MongoDB, Express, React, Node.js) for managing hospital operations. It allows patients to log in, schedule appointments, and view their prescriptions. The system provides a user-friendly interface for both patients and administrators, facilitating efficient healthcare management.

## 📁 Project Structure

- **frontend/**: Contains the React application for the user interface.
- **backend/**: Contains the Node.js and Express server for handling API requests and database interactions.
- **dashboard/**: Contains the admin dashboard for managing doctors and prescriptions.

## 🚀 Features

- **Patient Login**: Secure authentication for patients to access their profiles. 🔑
- **Appointment Scheduling**: Easily book and manage appointments with available doctors. 📅
- **Prescription Management**: View past prescriptions added to the patient's profile. 💊
- **Disease Information**: Access information on common diseases, their symptoms, and remedies. 📖
- **Doctor Directory**: A comprehensive list of available doctors, including their specialties and experience. 👨‍⚕️👩‍⚕️
- **Admin Dashboard**: An interface for administrators to manage doctors and add prescriptions for patients. ⚙️

## 🛠️ Technologies Used

- **MERN Stack**: 
  - **MongoDB**: For database management. 🗄️
  - **Express**: A web framework for Node.js. 🌐
  - **React**: The frontend framework for building the user interface. ⚛️
  - **Node.js**: For the backend server. 🟢
- **HTML/CSS/JavaScript**: For front-end design and interactivity. 🎨

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📌 Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the web application at `http://localhost:5173`.

### Dashboard Setup

1. Open a new terminal and navigate to the dashboard directory:
   ```bash
   cd dashboard
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the web application at `http://localhost:5174`.

## 📦 Containerization

The project has been containerized using Docker to simplify deployment and eliminate dependency issues. Follow the steps below to build and run the application using Docker.

### Prerequisites
Ensure Docker and Docker Compose are installed on your system.  
- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

### Build and Run the Containers

1. Navigate to the root directory of the project (where the `docker-compose.yml` file is located):
   ```bash
   cd <project-root>
   ```

2. Build the Docker images:
   ```bash
   docker-compose build
   ```

3. Start the containers:
   ```bash
   docker-compose up
   ```

4. Access the application:
   - Backend API: `http://localhost:4000`
   - Frontend: `http://localhost:3000`
   - Dashboard: `http://localhost:3001`

### Stopping the Containers
To stop the running containers, use:
```bash
docker-compose down
```

### Customization
- You can modify the exposed ports or environment variables in the `docker-compose.yml` file as needed.
- The `Dockerfile` in each service directory defines the build process for that service.
## 🌟 Acknowledgments

- Inspired by the need for efficient hospital management solutions.
- Open-source libraries and resources that aided development.
