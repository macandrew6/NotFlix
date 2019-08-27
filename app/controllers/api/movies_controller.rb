class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all.with_attached_image.with_attached_movie.with_attached_trailer
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    @movie[:user_movie] = params[:userMovie]
    if @movie.save
      render :show
    else
      render json: @movie.errors.full_messages, status: 422
    end
  end

end
