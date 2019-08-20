class Api::MoviesController < ApplicationController
  def index
    # what does this actually do? and how would i also attach a video along with each movie
    @movies = Movie.all.with_attached_image.with_attached_movie.with_attached_trailer
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    debugger
    if @movie.update(movie_params)
      render :show
    else
      render json: @movie.errors.full_messages, status: 422
    end
  end

  private
  def movie_params
    params.require(:movie).permit(:userMovie, :description, :rating, :content_length, :title)
  end
end
