class Api::UsersController < ApplicationController
  def new

  end
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :json => {:error => "username already exists"}.to_json, :status => 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
