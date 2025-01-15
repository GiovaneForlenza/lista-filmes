"use client";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();
const MovieContextProvider = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  // useEffect(() => {
  //   if (selectedMovie) setSelectedMovie(selectedMovie)
  // }, [selectedMovie]);
  return (
    <MovieContext.Provider value={(selectedMovie, setSelectedMovie)}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
