import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    TrendingMovies:null,
    upcomingMovies:null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovie: (state, action) => {
        state.TrendingMovies = action.payload;
      },
      addUpcoming: (state, action) => {
        state.upcomingMovies = action.payload;
      },
  },
});
export default moviesSlice.reducer;
export const { addnowPlayingMovies, addPopularMovie,addTrendingMovie,addUpcoming } = moviesSlice.actions;
