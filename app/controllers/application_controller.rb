class ApplicationController < ActionController::Base
  protect_from_forgery :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!(user)
    session[:session_token] = nil
    user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  # build these out when we add more backend routes(doubt they'll be necessary)
  def require_login

  end
end
