# frozen_string_literal: true
class CreateGames < ActiveRecord::Migration[5.2]
  def up
    create_table :games do |t|
      t.string :name
      t.text :description
      t.integer :min_players
      t.integer :max_player
      t.integer :duration
      t.integer :age_recommendation

      t.timestamps
    end
  end

  def down
    drop_table :games
  end
end
