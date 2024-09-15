import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import styles from "../styles/BookDetail.module.css";

const BookDetail = () => {
  const { id } = useParams();
  const { books, setSelectedBook } = useBookContext();
  const book = books.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (book) {
      setSelectedBook(book);
    }
  }, [book, setSelectedBook]);

  if (!book) return <div>Book not found</div>;

  return (
    <div className={styles.detail}>
      <img src={book.image} alt={book.title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.author}>
          <strong>Author:</strong> {book.author}
        </p>
        <p className={styles.description}>
          <strong>Description:</strong> {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
