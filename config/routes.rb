Bixel::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :areas
      resources :players
    end
  end
end
