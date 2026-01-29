# 🍳 Recipe Finder

A simple React application built using Vite that allows users to search for recipes and view full cooking details using the free TheMealDB API.

This project is for learning and practice purposes.

---

## 🚀 Features

- Search recipes by name
- View recipe image, category, and area
- Click on a recipe to see:
  - Ingredients with measurements
  - Step-by-step instructions
- Responsive grid layout
- Scrollable popup modal
- Built with plain CSS (no UI frameworks)

---

## 🛠 Tech Stack

- React (Vite)
- JavaScript
- CSS
- Axios
- TheMealDB Public API

---

## 📂 Project Structure

```bash
recipe-finder/
├── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ ├── RecipeList.jsx
│ │ ├── RecipeCard.jsx
│ │ └── RecipeModal.jsx
│ ├── api.js
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to:

```bash
http://localhost:5173
```

## 🌐 API Used:

TheMealDB: https://www.themealdb.com/api.php

Endpoint:

```bash
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```
