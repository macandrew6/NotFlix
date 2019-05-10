class CombinesTheIndexOfMovieIdAndUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :user_movies, :user_id
    remove_index :user_movies, :movie_id
  end
end
