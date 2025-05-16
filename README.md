# Search Analytics Dashboard

This project is a Search Analytics Dashboard built with a React + TypeScript frontend and a Node.js + Apollo Server backend using GraphQL. It visualizes search query metrics and time series data.

## 📁 Project Structure

dashboard/
├── frontend/
│ └── search-analytics/ # React + Vite frontend
├── backend/
│ └── mock-api/ # Node.js + Apollo GraphQL backend

## ⚙️ Setup Instructions

### 🔧 Backend

1. Navigate to the backend folder:

```bash
cd backend/mock-api
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend dev server:

bash
Copy
Edit
npm run dev
Frontend will run at: http://localhost:5173

📌 Notes
Make sure the backend server is running before starting the frontend.

Uses mock data in the backend to simulate search analytics.

If CORS issues occur, consider adding a proxy config in vite.config.ts.

Built with:

React + Vite + TypeScript

Apollo Client / Server

Recharts

Day.js

✅ Ready to Test
Once both servers are running, visit http://localhost:5173 to explore the dashboard.