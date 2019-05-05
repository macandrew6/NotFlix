# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :movie_genres,
    foreign_key: :genre_id,
    class_name: :MovieGenre

  has_many :movies,
    through: :movie_genres,
    source: :movie
end
