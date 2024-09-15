import React, { createContext, useState, useContext } from "react";

// Create Context
const BookContext = createContext();

// Create a provider component
export const BookProvider = ({ children }) => {
  const [books] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "Description 1",
      image: "/images/9780143452126_1.jpg",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description 2",
      image: "/images/9781310393868_17065222930.jpg",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      description: "Description 3",
      image: "/images/9781408726600_16548429380.jpg",
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      description: "Description 4",
      image: "/images/9781612681139_16600183430.jpg",
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      description: "Description 5",
      image: "/images/9781847941831_1.jpg",
    },
    {
      id: 6,
      title: "Book 6",
      author: "Author 6",
      description: "Description 6",
      image: "/images/9781861972781.jpg",
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ books, selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};

// Custom hook to use context
export const useBookContext = () => useContext(BookContext);
