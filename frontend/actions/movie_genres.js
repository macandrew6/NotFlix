import * as MovieGenresUtil from '../util/movie_genres';
export const RECEIVE_ALL_MOVIE_GENRES = 'RECEIVE_ALL_MOVIE_GENRES';

const receiveAllMovieGenres = movieGenres => ({
  type: RECEIVE_ALL_MOVIE_GENRES,
  movieGenres
});

export const fetchAllMovieGenres = () => dispatch => (
  MovieGenresUtil.fetchAllMovieGenres()
    .then(movieGenres => dispatch(receiveAllMovieGenres(movieGenres)))
);