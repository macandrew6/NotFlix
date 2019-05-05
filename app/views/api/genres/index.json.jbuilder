@genres.each do |genre|
  json.set! do genre.id
    json.partial 'api/genres/genre', genre: genre
  end
end