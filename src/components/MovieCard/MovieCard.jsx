import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";
export default function MovieCard(props) {
  const movie = props?.movie;
  return (
    <Link
      to={`/movie/${movie.id}`}
      // target="_blank"
      className={styles.container}
    >
      <img
        src={`${imagePrefixUrl}${props.movie?.poster_path}`}
        alt={movie?.title}
      />
      <p>{movie?.title}</p>
    </Link>
  );
}
