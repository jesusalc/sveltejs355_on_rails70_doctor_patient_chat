rbenv local $(<.ruby-version)
rbenv rehash


gem update --system 3.4.17

./bin/bundle install
./bin/bundle exec rails db:migrate
