import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBaground from "./VideoBaground";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MainContainer() {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  if (!movies) {
    return null; // Ensure the component returns null to avoid rendering issues
  }

  const allMovies = movies.slice(0, 4); // Take only the first 4 movies

  return (
    <div className="relative">
      <Slider {...settings}>
        {allMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <VideoBaground id={movie.id} />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <VideoTitle
                title={movie.original_title}
                overview={movie.overview}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainContainer;
