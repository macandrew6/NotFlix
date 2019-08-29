@user_movies.each do |user_movie|
  json.set! user_movie.id do
    json.partial! '/api/movies/movie', movie: user_movie.movie
  end
end

