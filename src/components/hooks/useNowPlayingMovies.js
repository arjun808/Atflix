import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants";
import { addnowPlayingMovies } from "../../utils/moviesSlice";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getKnowPlayingMovies = async () => {
    // const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options)
    // const json=await data.json();
    // console.log(json);
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    // console.log(data.data.results);
    dispatch(addnowPlayingMovies(data.data.results));
  };
  useEffect(() => {
    getKnowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
