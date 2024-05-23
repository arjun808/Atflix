import React from "react";
import MovieListComponent from "./MovieListComponent";
import { useSelector } from "react-redux";
import usePopularMovies from "./hooks/usePopularMovie";
import useTrendingMovie from "./hooks/useTrendingMovie";
import useUpComing from "./hooks/useUpComing";
function SecondaryContainer() {
  usePopularMovies();
  useTrendingMovie();
  useUpComing();
  const movies = useSelector((state) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20 px-12">
        <MovieListComponent
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieListComponent title={"Popular"} movies={movies.popularMovies} />
        <MovieListComponent title={"Trending"} movies={movies.TrendingMovies} />
        <MovieListComponent
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies}
        />
      
      </div>
    </div>
  );
}

export default SecondaryContainer;
