class AddsIndeciesMovieGenres < ActiveRecord::Migration[5.2]
  def change
    add_index :movie_genres, :genre_id
    add_index :movie_genres, :movie_id
  end
end
