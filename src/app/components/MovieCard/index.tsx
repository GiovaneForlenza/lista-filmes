import { Movie } from "@/app/types/movie";
import React, { useContext } from "react";
import StarRating from "../StarRating";

import "./index.scss";
import { MovieContext } from "@/app/contexts/MovieContext";

export interface Props {
  movie: Movie;
}

function MovieCard(props: Props) {
  const movie = props.movie;
  const setSelectedMovie = useContext(MovieContext);
  return (
    <li className="movie-card" onClick={() => setSelectedMovie(movie)}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie-info">
        <p className="title"> {movie.title}</p>
        {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}
        <div className="hidden-content">
          {movie.overview && (
            <p className="description">
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </p>
          )}
          <button
            className="btn-default"
            onClick={() => setSelectedMovie(movie)}
          >
            Ver mais
          </button>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
