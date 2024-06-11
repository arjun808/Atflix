import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video pt-[15%] lg:pt-[20%] px-12  lg:px-24 absolute z-20 mt-[75%] lg:mt-0 text-white lg:bg-gradient-to-r from-black h-full">
      <h1 className="text-xl lg:4xl font-bold">{title}</h1>
      <p className="py-6 hidden lg:flex text-lg w-full lg:w-1/2 opacity-20">{overview}</p>
      <div>
        <button className="bg-white text-black hover:bg-opacity-50 px-6 p-2 lg:p-4,px-12 text-xl  rounded-lg">Play</button>
        <button className="bg-gray-500 mx-2 text-white p-2 lg:p4 px-6 lg:px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
