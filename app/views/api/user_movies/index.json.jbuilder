@user_movies.each do |user_movie|
  if current_user.id == user_movie.user_id
    json.set! user_movie.id do
      json.partial! '/api/movies/movie', movie: user_movie.movie
    end
  end
end

