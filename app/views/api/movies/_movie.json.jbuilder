json.extract! movie, :id, :title, :description, :rating, :content_length 
json.image_url url_for(movie.image)
json.movie_url url_for(movie.movie)