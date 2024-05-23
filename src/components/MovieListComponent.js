import React from "react";
import MovieCart from "./MovieCart";

function MovieListComponent({ title, movies }) {
  const posterPath = movies ? movies[0].poster_path : null;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white ">{title}</h1>
      <div className="flex overflow-x-scroll  no-scrollbar ">
        <div className="flex p-3 gap-2">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCart key={movie.id} poster_path={movie.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieListComponent;
