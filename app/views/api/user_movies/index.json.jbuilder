# @user_movies.each do |user_movie|
#   @user[user_movie.user_id].movies.each
# end
# current_user.movies.each do |movie|
#   json.extract! movie, :id, :title, :description, :rating, :content_length 
# end
current_user.movies.each do |movie|
  json.set! movie.id do
    # debugger;
    json.extract! movie, :id, :title, :description, :rating, :content_length 
  end
end