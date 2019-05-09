# potential code for profiles
# @user_movies.each do |user_movie|
#   @user[user_movie.user_id].movies.each
# end
# current_user.movies.each do |movie|
#   json.extract! movie, :id, :title, :description, :rating, :content_length 
# end

json.array! current_user.movies do |movie|
  json.partial! '/api/movies/movie', movie: movie
end