class Api::UserMoviesController < ApplicationController
  def create
    @user_movie = UserMovie.new(user_movies_params)
    if @user_movie.save
      @user_movies = current_user.user_movies
      render :index
    else
      render json: ["cannot add the same movie"]
    end
  end

  def index 
    @user_movies = current_user.user_movies
  end

  def destroy
    @user_movie = UserMovie.find(params[:id])
    if @user_movie.destroy
      @user_movies = current_user.user_movies
      render :index
    end
  end

  private
  def user_movies_params
    params.require(:user_movie).permit(:user_id, :movie_id)
  end
end
