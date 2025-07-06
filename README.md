# 🏡 Project Airbnb - Full-Stack Web Application

A fully functional, responsive Airbnb-style web application built using **Node.js**, **Express**, **EJS**, **MongoDB Atlas**, and **Bootstrap**, deployed on **Render**. This project includes essential features like user authentication, listing management, image uploads, map integration, and a modern dark mode UI.

🔗 **Live Demo**: [project-airbnb-d729.onrender.com](https://project-airbnb-d729.onrender.com)

> Modern UI with light/dark mode toggle, listing cards, and mobile responsiveness

---

## ✨ Features

- 🔐 **Authentication** – Sign Up, Login, Logout using Passport.js
- 🏠 **CRUD operations** – Create, Read, Update, Delete listings with complete form validation
- 📍 **Map Integration** – View property locations via **Mapbox**
- 🖼️ **Image Upload** – Upload multiple images using **Cloudinary** cloud storage
- 🌙 **Dark Mode** – Smooth toggle with full UI theme support
- 📱 **Responsive Design** – Mobile-friendly layout with **Bootstrap 5**
- 🧾 **Form Validation** – Bootstrap feedback for better UX
- 🔎 **Search Functionality** – Search listings by location using query parameters
- 📦 **Modular Code Structure** – Organized using MVC pattern for scalability and readability

---

## 🛠️ Tech Stack

### 🔹 Frontend:
- HTML5, EJS Templates
- CSS3, Bootstrap 5
- JavaScript (Vanilla)

### 🔹 Backend:
- Node.js
- Express.js

### 🔹 Database:
- MongoDB Atlas
- Mongoose ODM

### 🔹 Tools & Services:
- Cloudinary (Image Hosting)
- Mapbox (Interactive Maps)
- Passport.js (Authentication)
- Express-Session & Flash (User Session & Messages)
- Method-Override (PUT/DELETE via POST)
- Render (Deployment)
- Git & GitHub (Version Control)

---

## 📁 Project Structure

![Screenshot 2025-07-06 165031](https://github.com/user-attachments/assets/a8c88a67-3225-4113-aefd-fa774e3edd28)


---

## 🚀 Deployment

> This project is deployed on Render. It uses:

- Render Web Service for server
- MongoDB Atlas for cloud database
- Environment Variables for secure config

---

## 🧑‍💻 How to Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/project-airbnb.git
cd project-airbnb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

- Create a .env file in the root directory and add the following variables:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
```
- Message me if you need the Variables!

### 4. Start the Development Server

```bash
node app.js
```

- Visit http://localhost:3000/listings in your browser to view the application.

---

## 📸 Preview - Screenshots

- Home Page
![Screenshot (10)](https://github.com/user-attachments/assets/05a61929-b3b9-48c2-80ed-4b9736160cb4)

- Home page (Dark Mode) 
![image](https://github.com/user-attachments/assets/340c64a6-7798-496d-99ce-d9df7b569538)

- Show Page
![image](https://github.com/user-attachments/assets/2ef663f8-1acd-4995-9bf7-5e6b0047702c)

- Show Page (Reviews)
![image](https://github.com/user-attachments/assets/34e15d29-7e46-445b-82ad-cf245250801b)

- Add new listing Page
![image](https://github.com/user-attachments/assets/5490a391-8570-4448-a26b-41d8483ab797)

---

### ⭐️ If you like this project, give it a star on GitHub!

