"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";
import MovieCard from "../MovieCard";
import { Movie } from "@/app/types/movie";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies =  () => {
     axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "bceff532bdc2a39023bc2242c5d254d8",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
    setIsLoading(false);
  };
  // if (isLoading)
  //   return (
  //     <div className="loading-container">
  //       <OrbitProgress color="#6046ff" size="medium" text="" textColor="" />
  //     </div>
  //   );
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default MovieList;
