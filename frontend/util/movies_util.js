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

export const updateMovie = data => (
  $.ajax({
    method: 'PATCH',
    url: `/api/movies/${data.id}`,
    data: data
  })
);