import React, { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);

  const images = [
    "/slide_images/2024080117433.webp",
    "/slide_images/2024080118562.webp",
    "/slide_images/2024083177341.webp",
    "/slide_images/2024090246451.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(false); // Start transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(true); // End transition
      }, 500); // Matches the CSS transition duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${styles.image} ${
            index === currentIndex ? styles.active : ""
          } ${transitioning ? styles.transition : ""}`}
        />
      ))}
    </div>
  );
};

export default Slider;
