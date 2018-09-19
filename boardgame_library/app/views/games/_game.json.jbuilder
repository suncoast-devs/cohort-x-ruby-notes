json.extract! game, :id, :name, :description, :min_players, :max_players, :min_duration, :max_duration, :min_age, :designer_id, :created_at, :updated_at
json.url game_url(game, format: :json)
