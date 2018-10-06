class Api::SessionsController <  ApplicationController
  def new
  end

  def create
    @user = User.find_by_cred(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :json => 'hey'
    else
      render :json => {:error => "invalid credentials"}.to_json, :status => 404
    end
  end

  def destroy
    logout
    render :json => {}
  end
end
