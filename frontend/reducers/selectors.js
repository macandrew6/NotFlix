// export const allMoviesByGenre = (genres, movieGenres, movies) => {
//   let moviesByGenre = [];
//   let movie = {};
//   Object.values(genres).forEach(genre => {
//     movie[genre.name] = movieGenres.filter(movieGenre => (
//       movieGenre.genre_id === genre.id
//     )).map(movieGenre => (
//       movies[movieGenre.movie_id]
//     ));
//   });  
// };

export const allMoviesByGenre = (genres, movies, movieGenres) => {
  return Object.values(movieGenres).map(movieGenre => {
    let moviesInGenres = {};
    moviesInGenres[genres[movieGenre.genreId].name] = movies[movieGenre.movieId];
    return moviesInGenres;
  });
};

