class Api::GenresController < ApplicationController
  def index
    @genres = Genres.all
  end

  def show
    @genre = Genre.find(params[:id])
  end
end
