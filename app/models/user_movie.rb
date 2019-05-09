# == Schema Information
#
# Table name: user_movies
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserMovie < ApplicationRecord
  validates :user_id, :movie_id, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :movie,
    foreign_key: :movie_id,
    class_name: :Movie
end
