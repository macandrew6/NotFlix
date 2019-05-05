class CreateMovieGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_genres do |t|
      t.integer :genre_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
    add_index :movie_genres, :genre_id, unique: true
    add_index :movie_genres, :movie_id, unique: true
  end
end
