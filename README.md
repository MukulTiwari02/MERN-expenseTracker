# MERN-ExpenseTracker

A simple expense tracker application built using the MERN stack (MongoDB, Express, React, Node.js). This app does not include user authentication.

## Live Demo

[Live Demo](https://mern-expense-tracker-six.vercel.app/)

## Repository

[GitHub Repository](https://github.com/MukulTiwari02/MERN-expenseTracker)

## Demo Screenshot

![App Demo](/demo/images/demo.png)

## Features

- Add and remove expenses
- View a list of all expenses
- Persistent data storage using MongoDB

## Folder Structure

- `api/` - Backend (Node.js, Express, MongoDB)
- `/` - Frontend (React)

## Installation and Running Locally

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (local or cloud database like MongoDB Atlas)

### Environment Variables - Backend (`api/.env`)

Create a `.env` file in the `api` folder and add the following:

```env
MONGODB_URL=your_mongodb_connection_string
PORT=your_preferred_port_number
```

### Environment Variables - Frontend (`.env`)

Create a `.env` file in the root folder and add:

```env
REACT_APP_API_URL=your_backend_url
```

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/MukulTiwari02/MERN-expenseTracker.git
   cd MERN-expenseTracker
   ```

2. Install dependencies:

   ```sh
   npm i
   ```

3. Start the backend server:

   ```sh
   cd api
   node index.js
   ```

4. Open a new terminal and start the frontend server:

   ```sh
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## Technologies Used

- **Frontend:** React, React Hooks, CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB

## Contributing

Feel free to contribute by creating issues or submitting pull requests.
