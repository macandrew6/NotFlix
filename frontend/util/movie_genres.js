export const fetchAllMovieGenres = () => (
  $.ajax({
    method: "GET",
    url: "/api/movie_genres"
  })
);