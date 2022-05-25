class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        new_user = User.new(user_params)
        if new_user.save
            render json: new_user
        else 
            render json: {errors: new_user.errors.full_messages}
        end
    end

    def user_params
        params.permit(:name, :username, :password)
    end

end
