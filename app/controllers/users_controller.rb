class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    before_action :create_household, only: [:create]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def create_household
        @new_household = Household.create(last_name: params[:last_name])
    end

    def user_params
        params.permit(:first_name, :username, :email, :is_parent, :password).merge(household_id: @new_household.id)
    end
end