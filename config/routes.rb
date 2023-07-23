Rails.application.routes.draw do
  root 'pages#home'
  resources :messages, only:[:create,:update,:index,:new,:show ]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
