import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_options } from "../utils/constants";

function VideoBaground({ id }) {
  const [trailer, setTrailer] = useState(null);
  const getNowPlayVideo = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_options
    );

    const filterData = data.data.results.filter((video) => {
      return video.type === "Trailer";
    });
    const Trailer = filterData.length ? filterData[0] : data.data.results[0];
    if (Trailer) {
      setTrailer(Trailer.key);
    }
  };

  useEffect(() => {
    getNowPlayVideo();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={"https://www.youtube.com/embed/" + trailer + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBaground;
