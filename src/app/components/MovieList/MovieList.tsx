"use client";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import MovieCard from "../MovieCard";
import { Movie } from "@/app/types/movie";
import { MovieContext } from "@/app/contexts/MovieContext";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    getMovies();
  }, []);
  
  useEffect(() => {
    if (selectedMovie === undefined) return;
    alert(selectedMovie.title);

    dialogRef.current?.showModal();
    dialogRef.current?.addEventListener("close", closeModal);
    document.body.style.overflow = "hidden";
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [selectedMovie]);

  function closeModal() {
    dialogRef.current?.close();
    setSelectedMovie(undefined);
    document.body.style.overflow = "";
  }
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
