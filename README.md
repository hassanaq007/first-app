# Student Portal - Directory Page

A React-based **Student Directory** web application developed as part of the Software Construction and Development Lab course. This application serves as the foundation for a growing student management system, designed to dynamically display student profiles, majors, graduation years, and academic performance metrics.

## 🚀 Overview

This project is part of a continuous lab curriculum. The primary focus of this phase is establishing a solid structural foundation, building reusable user interface components, and managing dynamic rendering using React. As the course progresses, this application will continuously evolve to integrate advanced state management, routing, backend APIs, and database solutions.

## ✨ Features Implemented

* **Dynamic Student Directory**: Displays student cards featuring key academic info including Major, Graduation Year, and CGPA.
* **Conditional Visibility**: Leverages React `useState` hooks to toggle between showing and hiding specific student details via the "Hide Details / Show Details" buttons.
* **Interactive View Tracking**: Uses state management to dynamically track and increment individual profile view counters when interacting with the directory.
* **Component-Driven Architecture**: Structured using modular and reusable React components (e.g., student profile cards, navigation bar, footer).
* **Pagination System**: Clean, user-friendly page navigation controls setup for handling large directory listings.

## 🛠️ Tech Stack & Concepts Covered

* **Frontend Framework**: React.js
* **State Management**: React Hooks (`useState`) for interactive UI layers
* **Styling**: Modern CSS Grid and Flexbox layouts
* **Core Concepts**: Component architecture, conditional rendering, event handling, and dynamic lists

## 📅 Roadmap & Future Enhancements

As this is a continuously growing application, upcoming lab modules will expand its capabilities to include:

* **Global State & Effects**: Integrating hooks like `useEffect` to manage application lifecycles and advanced state managers.
* **Dynamic Search & Filtering**: Activating the top navigation search bar to filter the directory by student names, majors, or graduation years.
* **React Router Integration**: Creating separate views for individual student profiles and the management dashboard.
* **Backend Connection**: Replacing mock data states with live REST API data payloads.
* **Form Validation**: Powering up the "Add New Student" feature with validation checks and error messaging.

## ⚙️ Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org) installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd student-portal-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will spin up locally using Vite and should be accessible in your browser at `http://localhost:5173`.
