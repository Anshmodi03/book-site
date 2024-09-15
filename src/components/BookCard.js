import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

const BookCard = ({ book }) => (
  <div className={styles.card}>
    <img src={book.image} alt={book.title} className={styles.image} />
    <div className={styles.info}>
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>by {book.author}</p>
      <Link to={`/books/${book.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  </div>
);

export default BookCard;
