class CombinesTheIndexOfMovieIdAndUserId2 < ActiveRecord::Migration[5.2]
  def change
    add_index :user_movies, [:user_id, :movie_id], unique: true
  end
end
