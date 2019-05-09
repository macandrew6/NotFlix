class SecondFixToUserMovieIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :user_movies, :movie_id
  end
end
