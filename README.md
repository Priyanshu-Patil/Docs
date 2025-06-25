# 📚 Docs | Your Ultimate Document Management Solution

A sleek, interactive, and minimal document management app built with **React** and **Vite**. **Docs** empowers you to create, edit, and organize notes or document cards with a beautiful interface and persistent storage—all right in your browser.

---

## 📝 Description

**Docs** is a web-based documentation and note-taking tool designed for simplicity and productivity. Whether you're jotting down ideas, managing daily tasks, or organizing code snippets, **Docs** provides a visually appealing and intuitive platform.

---

## 🚀 Getting Started

Follow these steps to set up and run **Docs** locally:

### 1. **Clone the Repository**

bash
git clone <your-repo-url>
cd docs


### 2. **Install Dependencies**

bash
npm install


### 3. **Start the Development Server**

bash
npm run dev


The app will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## 🛠️ Tech Stack

| Tech        | Description |
|-------------|-------------|
| ⚛️ **React (v19)**       | Component-based UI library for building dynamic, responsive interfaces. |
| ⚡ **Vite**              | Fast build tool with lightning-fast HMR for efficient development. |
| 🎨 **Tailwind CSS**      | Utility-first CSS framework for rapid styling with a clean look. |
| 🌀 **motion (Framer Motion)** | Library for smooth animations and drag-and-drop support. |
| 🆔 **nanoid**            | Tiny, secure, URL-friendly unique ID generator for card tracking. |
| 🌟 **react-icons**       | Huge collection of SVG icons as React components. |

---

## 📁 Project Structure

Here's an overview of the folder organization:

docs/
├── public/                     # Static files (favicon, images, etc.)
│
├── src/
│   ├── assets/                 # Fonts (e.g., Gilroy) and static assets
│   ├── components/             # Reusable components
│   │   ├── AddCardButton.jsx
│   │   ├── RemoveAllButton.jsx
│   │   ├── Background.jsx
│   │   ├── Foreground.jsx
│   │   └── ...
│   ├── App.jsx                 # Main component
│   ├── main.jsx                # Entry point for React
│   └── index.css               # Tailwind + custom styles
│
├── .gitignore
├── index.html                  # Main HTML template
├── package.json
└── vite.config.js              # Vite configuration


---

## ✨ Key Features

- 📝 **Add, Edit, and Delete Cards**  
    Create up to **7 draggable cards** to manage your notes.

- 🔠 **Word Limit**  
    Each card supports up to **100 words**, helping you focus on brevity.

- 💾 **Persistent Storage**  
    Notes are saved in your browser’s **localStorage**—no account required!

- 🖱️ **Drag & Drop**  
    Smooth and intuitive **drag-and-drop** interface to rearrange cards.

- 🧹 **Remove All**  
    **Instantly clear** all notes with a single click.

- 📱 **Responsive Design**  
    Fully functional on **mobile**, **tablet**, and **desktop**.

- 🖋️ **Custom Font**  
    Styled with the elegant **Gilroy** font for a modern touch.

- 🌙 **Modern UI**  
    A clean and minimal aesthetic enhanced with **subtle animations**.
