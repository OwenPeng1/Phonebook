Rails.application.routes.draw do
  
  resources :contacts
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

    post '/login', to: "session#create"
    get '/userInSession', to: "session#logged_user"
    delete "/logout", to: "session#destroy"

    get '/favorite', to: "contacts#favorite"
  
end
