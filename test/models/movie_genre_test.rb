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

require 'test_helper'

class MovieGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
