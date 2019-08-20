class Api::UserMoviesController < ApplicationController
  def create
    @user_movie = UserMovie.new(user_movies_params)
    debugger
    if @user_movie.save
      render :index
    else
      render json: ["cannot add the same movie"]
    end
  end

  def index 
    @user_movies = UserMovie.all
  end

  def destroy
    @user_movie = UserMovie.find(params[:id])
    @user_movie.destroy
  end

  private
  def user_movies_params
    params.require(:user_movie).permit(:user_id, :movie_id)
  end
end
