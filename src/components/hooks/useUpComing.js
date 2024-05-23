

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants";
import {addUpcoming } from "../../utils/moviesSlice";
import axios from "axios";

const useUpComing = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_options
    );

    dispatch(addUpcoming(data.data.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);
};
export default useUpComing;
