

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants";
import { addPopularMovie, addnowPlayingMovies } from "../../utils/moviesSlice";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
   
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_options
    );
 
    dispatch(addPopularMovie(data.data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
