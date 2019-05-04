# == Schema Information
#
# Table name: movies
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :text             not null
#  rating         :string           not null
#  content_length :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Movie < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :description, :rating, :content_length, presence: true

  has_one_attached :image
  has_one_attached :movie
end
