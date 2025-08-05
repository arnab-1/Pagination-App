🔢 Pagination App
A full-stack web application that demonstrates how to implement efficient pagination using React on the frontend and Node.js with MongoDB on the backend.

This project is ideal for learning how to handle large datasets with smooth client-server pagination.

🚀 Live Demo
Coming soon

📦 Tech Stack
Layer

Tech Used

Frontend

React, Axios, CSS

Backend

Node.js, Express.js

Database

MongoDB (via Mongoose)

Dev Tools

Nodemon, concurrently
```
📁 Folder Structure
Pagination-App/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── package.json
└── README.md
```
⚙️ Installation & Setup
1. Clone the Repository
```
git clone https://github.com/arnab-1/Pagination-App.git
cd Pagination-App
```

2. Setup Backend
Navigate to the backend directory and install dependencies.
```
cd backend
npm install
```
Create a .env file in the backend directory and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string_here
```
Run the backend server:
```
npm run dev
```
3. Setup Frontend
In a new terminal, navigate to the frontend directory, install dependencies, and start the client.
```
cd frontend
npm install
npm start
```
Frontend runs on http://localhost:3000

Backend runs on http://localhost:5000

🔁 How Pagination Works
The Frontend sends an API request to the backend, including the desired page number and limit (items per page).
```
GET /api/items?page=2&limit=10
```
The Backend receives the request and uses the Mongoose skip() and limit() methods in its MongoDB query.

skip() bypasses a certain number of documents.

limit() restricts the number of documents returned.

The backend sends the paginated data along with total page count back to the frontend.

The Frontend updates its state with the new data and displays the appropriate page navigation controls.

✨ Features
Paginated API endpoints for efficient data loading.

Clean UI with "Previous" and "Next" pagination buttons.

Page navigation state is synced with the API.

Scalable architecture designed for large datasets.

🧪 Sample API
```
    GET /api/items?page=1&limit=10
```
return:
```
{
  "data": [
    // ... 10 items
  ],
  "totalPages": 5,
  "currentPage": 1
}
```
🛠️ Future Improvements (TODOs)
[ ] Add a search bar that works with pagination.

[ ] Implement loading skeletons for a better user experience.

[ ] Deploy the frontend to Vercel and the backend to Render.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📜 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Made with ❤️ by Arnab