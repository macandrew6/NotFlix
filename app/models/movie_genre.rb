# == Schema Information
#
# Table name: movie_genres
#
#  id         :bigint           not null, primary key
#  genre_id   :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MovieGenre < ApplicationRecord
  validates :genre_id, :movie_id, presence: true

  belongs_to :movie,
    foreign_key: :movie_id,
    class_name: :Movie

  belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre
end
