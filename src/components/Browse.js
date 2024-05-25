import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptView from "./GptView";
import { useSelector } from "react-redux";



function Browse() {
  const showGptOrNot=useSelector((state)=>state.gpt.showGptOrNot)
useNowPlayingMovies();

  return (
    <div className="bg-black">
      <Header />
      {
        showGptOrNot?(
      <GptView/>

        ):(
          <>
      <MainContainer/>
      <SecondaryContainer/>

          </>
        )
      }
    </div>
  );
}

export default Browse;
