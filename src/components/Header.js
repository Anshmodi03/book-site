import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1>BookChor Clone</h1>
    <nav>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
    </nav>
  </header>
);

export default Header;
