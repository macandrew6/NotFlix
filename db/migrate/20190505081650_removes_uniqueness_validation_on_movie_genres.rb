class RemovesUniquenessValidationOnMovieGenres < ActiveRecord::Migration[5.2]
  def change
    remove_index :movie_genres, :genre_id
    remove_index :movie_genres, :movie_id
  end
end
