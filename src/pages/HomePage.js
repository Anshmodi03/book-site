import React from "react";
import Slider from "../components/Slider";
import BookCard from "../components/BookCard";
import { useBookContext } from "../context/BookContext";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const { books } = useBookContext();

  return (
    <div className={styles.container}>
      <Slider />
      <h2 className={styles.heading}>Featured Books</h2>
      <div className={styles.grid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
