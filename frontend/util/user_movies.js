export const fetchUserMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/user_movies'
  })
);

export const postUserMovie = data => (
  $.ajax({
    method: 'POST',
    url: `/api/user_movies/`,
    data: data,
  })
);