class Api::MoviesController < ApplicationController
  def index
    # what does this actually do? and how would i also attach a video along with each movie
    @movies = Movie.all.with_attached_image.with_attached_movie.with_attached_trailer
  end

  def show
    @movie = Movie.find(params[:id])
  end
end
