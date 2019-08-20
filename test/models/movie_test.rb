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
#  user_movie     :boolean          default(FALSE)
#

require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
