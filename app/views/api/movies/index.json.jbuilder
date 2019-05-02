json.array! @movies do |movie|
  json.set! movie.id do
    debugger;
    # json.partial! 'movies/movie', movie: movie
    json.extract! movie, :id, :title, :description, :rating, :content_length
  end
end