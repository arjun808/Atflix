import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBaground from "./VideoBaground";

function MainContainer() {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  if (!movies) {
    return;
  }
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBaground id={id} />
    </div>
  );
}

export default MainContainer;
