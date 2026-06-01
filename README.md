# She Can Foundation

She Can Foundation is a global nonprofit web application dedicated to empowering women and girls through education, professional development, and community building.

This repository is split into:
- **`backend`**: Node.js & Express API for handling contact submissions, volunteer applications, and newsletter subscriptions.
- **`frontend`**: React & Vite single-page application with modern styling, animations, and transitions.

---

## Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher)

### Setup & Installation

1. Clone the repository (if not already done).
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
3. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

### Running the Project

#### 1. Start the Backend Server
In the `backend` folder, run:
```bash
npm start
```
The backend server will run on `http://localhost:5000`.

#### 2. Start the Frontend Dev Server
In the `frontend` folder, run:
```bash
npm run dev
```
The frontend dev server will start, typically on `http://localhost:5173`. Open this URL in your web browser.

---

## Key Features

- **Empowerment Portal**: Displays dynamic statistics fetched directly from the backend server.
- **Volunteer Registration**: Users can apply to volunteer, sending application data to the backend API.
- **Newsletter Subscription**: Integrated newsletter sign-up with duplicate check and validation on the server.
- **Responsive and Aesthetic Design**: Featuring modern layout styles, custom HSL color palettes, responsive design, and smooth scroll animations.
