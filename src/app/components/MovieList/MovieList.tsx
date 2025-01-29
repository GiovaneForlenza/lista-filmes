"use client";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import MovieCard from "../MovieCard";
import { Movie } from "@/app/types/movie";
import { MovieContext } from "@/app/contexts/MovieContext";
import { ModalContext } from "@/app/contexts/ModalContext";


function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  const dialogRef = useContext(ModalContext);

  useEffect(() => {
    if (selectedMovie) alert(selectedMovie.title);
  }, [selectedMovie]);


  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
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
    // setIsLoading(false);
  };

  return (
    <div>
      <dialog className="modal" ref={dialogRef}>
        Hello
      </dialog>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
