@movie_genres.each do |movie_genre|
  json.set! movie_genre.id do 
    json.extract! movie_genre, :id, :genre_id, :movie_id
  end
end