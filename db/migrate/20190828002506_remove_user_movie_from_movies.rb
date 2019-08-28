class RemoveUserMovieFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :user_movie
  end
end
