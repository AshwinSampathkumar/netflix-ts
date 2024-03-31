import { createSlice } from "@reduxjs/toolkit";
import { MoviesSliceType } from "../../types";

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  trendingMovies: null,
  topRatedMovies: null,
  tvShows: null,
  movies: null,
  trailerVideo: null,
} as MoviesSliceType;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addTvShows,
  addMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
