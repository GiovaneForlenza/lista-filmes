"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";



export const MovieContext = createContext();
const MovieContextProvider = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const openModal = useContext(ModalContext);

  useEffect(() => {
    openModal(selectedMovie);
  }, [selectedMovie]);

  return (
    <MovieContext.Provider value={(selectedMovie, setSelectedMovie)}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
