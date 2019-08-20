class AddingUserBooleanToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :user_movie, :boolean, :default => false
  end
end
