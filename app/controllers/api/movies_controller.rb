class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all.with_attached_image
  end
end
