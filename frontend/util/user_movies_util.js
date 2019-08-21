export const fetchUserMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/user_movies'
  })
);

export const postUserMovie = data => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/user_movies/`,
      data: data,
    })
  );
};

export const removeUserMovie = id => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/user_movies/${id}`
    })
  );
};