json.extract! genre, :id, :name
json.movieIds genre.movies.map{|movie| movie.id}