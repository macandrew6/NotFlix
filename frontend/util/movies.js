export const fetchMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/movies'
  })
);

export const fetchMovie = id => (
  $.ajax({
    method: 'GET',
    url: `/api/movies/${id}`
  })
);