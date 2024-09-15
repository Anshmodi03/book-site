import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import styles from "./styles/App.module.css";

const App = () => (
  <Router>
    <BookProvider>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Routes>
      </div>
    </BookProvider>
  </Router>
);

export default App;
