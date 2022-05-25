class SessionController < ApplicationController

  include ActionController::Cookies
  
    def create
        user = User.find_by(username: params[:username])
        if user
          if user.authenticate(params[:password])
              session[:user_id] = user.id
              render json: user
          else
            render json: {error: "Login Error"}
          end
        else
          render json: {error: "Login Error"}
        end
    end

    def logged_user
      user = User.find_by(id: session[:user_id])
      render json: user
    end

    def destroy
      session.delete(:user_id)
      render json: {}
    end

    # def logged_user
    #   byebug
    # end
end
