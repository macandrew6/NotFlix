import * as GenreUtil from '../util/genres';

export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = genres => ({
  type: RECEIVE_GENRES,
  genres
});

export const fetchGenres = () => dispatch => (
  GenreUtil.fetchGenres()
    .then(genres => dispatch(receiveGenres(genres)))
);