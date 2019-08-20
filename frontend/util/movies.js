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

export const editMovie = data => {
  $.ajax({
    method: 'UPDATE',
    url: `/api/movies/${data.id}`,
    data
  });
};