class FixtoUserMovieIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :user_movies, :movie_id
  end
end
