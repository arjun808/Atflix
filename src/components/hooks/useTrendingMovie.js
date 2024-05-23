import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants";
import { addTrendingMovie } from "../../utils/moviesSlice";
import axios from "axios";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const getTrendingMovie = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );

    dispatch(addTrendingMovie(data.data.results));
  };
  useEffect(() => {
    getTrendingMovie();
  }, []);
};
export default useTrendingMovie;
