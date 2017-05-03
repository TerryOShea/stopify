Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :destroy, :update]
  end

  get "*path" => "static_pages#root"
end
